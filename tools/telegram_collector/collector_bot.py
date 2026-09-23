import os
os.environ["NO_PROXY"] = "*"
import sys
import io
import json
import datetime
from pathlib import Path
from dotenv import load_dotenv
import telebot

if sys.platform == "win32":
    try:
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
        sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')
    except Exception:
        pass

# Paths
BASE_DIR = Path(__file__).resolve().parent.parent.parent
INBOX_DIR = BASE_DIR / "client_inbox"
IMAGES_DIR = INBOX_DIR / "images"
ARCHIVE_DIR = INBOX_DIR / "archive"
BATCH_JSON = INBOX_DIR / "current_batch.json"
BATCH_MD = INBOX_DIR / "current_batch.md"

# Ensure directories exist
IMAGES_DIR.mkdir(parents=True, exist_ok=True)
ARCHIVE_DIR.mkdir(parents=True, exist_ok=True)

# Load env variables
load_dotenv(BASE_DIR / ".env")
BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
ALLOWED_USERNAME = (os.getenv("ALLOWED_USERNAME") or "").strip().lower().lstrip("@")
ALLOWED_USER_ID = os.getenv("ALLOWED_USER_ID", "").strip()

if not BOT_TOKEN:
    raise ValueError("TELEGRAM_BOT_TOKEN is not set in .env")

telebot.apihelper._get_req_session().trust_env = False
bot = telebot.TeleBot(BOT_TOKEN)

def is_authorized(message) -> bool:
    user = message.from_user
    if not user:
        return False
    user_id_str = str(user.id)
    username = (user.username or "").lower().lstrip("@")
    
    # Check ID if set
    if ALLOWED_USER_ID and user_id_str == ALLOWED_USER_ID:
        return True
    
    # Check username
    if ALLOWED_USERNAME and username == ALLOWED_USERNAME:
        # If user ID wasn't saved yet, save it to .env
        if not ALLOWED_USER_ID:
            save_user_id_to_env(user_id_str)
        return True
        
    return False

def save_user_id_to_env(uid: str):
    global ALLOWED_USER_ID
    ALLOWED_USER_ID = uid
    env_file = BASE_DIR / ".env"
    if env_file.exists():
        content = env_file.read_text(encoding="utf-8")
        if "ALLOWED_USER_ID=" in content:
            new_content = ""
            for line in content.splitlines():
                if line.startswith("ALLOWED_USER_ID="):
                    new_content += f"ALLOWED_USER_ID={uid}\n"
                else:
                    new_content += line + "\n"
            env_file.write_text(new_content, encoding="utf-8")

def load_batch():
    if BATCH_JSON.exists():
        try:
            with open(BATCH_JSON, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {"created_at": datetime.datetime.now().isoformat(), "items": []}

def save_batch(batch_data):
    with open(BATCH_JSON, "w", encoding="utf-8") as f:
        json.dump(batch_data, f, ensure_ascii=False, indent=2)
    
    # Also write a formatted markdown file for easy viewing
    md_lines = [
        f"# Текущая пачка правок от заказчика",
        f"**Дата создания:** {batch_data.get('created_at', '')}",
        f"**Всего сообщений:** {len(batch_data.get('items', []))}\n",
        "---"
    ]
    for idx, it in enumerate(batch_data.get("items", []), 1):
        md_lines.append(f"### Пункт #{idx}")
        if it.get("forwarded_from"):
            md_lines.append(f"*Переслано от:* **{it['forwarded_from']}**")
        md_lines.append(f"*Время:* `{it.get('time', '')}`")
        if it.get("text"):
            md_lines.append(f"**Текст заказчика:**\n> {it['text']}\n")
        else:
            md_lines.append("*(Текст отсутствует)*\n")
        if it.get("image"):
            rel_img = Path(it['image']).name
            md_lines.append(f"**Скриншот:** `client_inbox/images/{rel_img}`\n")
        md_lines.append("---")
    
    with open(BATCH_MD, "w", encoding="utf-8") as f:
        f.write("\n".join(md_lines))

def archive_current_batch():
    if not BATCH_JSON.exists():
        return
    batch = load_batch()
    if not batch.get("items"):
        return
    ts = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    archive_file = ARCHIVE_DIR / f"batch_{ts}.json"
    with open(archive_file, "w", encoding="utf-8") as f:
        json.dump(batch, f, ensure_ascii=False, indent=2)
    # Clear current batch
    BATCH_JSON.unlink(missing_ok=True)
    BATCH_MD.unlink(missing_ok=True)

@bot.message_handler(commands=['start', 'help'])
def cmd_start(message):
    if not is_authorized(message):
        bot.reply_to(message, "⛔ Доступ ограничен.")
        return
    bot.reply_to(
        message,
        "👋 Бот-коллектор правок активен!\n\n"
        "Просто пересылайте сюда сообщения и скриншоты от заказчика.\n\n"
        "Команды:\n"
        "• /status — посмотреть текущие собранные сообщения\n"
        "• /done — зафиксировать пачку правок\n"
        "• /clear — очистить текущую пачку\n\n"
        "Как только закончите пересылать, напишите в Antigravity: «Ну что, прочитал?»"
    )

@bot.message_handler(commands=['status'])
def cmd_status(message):
    if not is_authorized(message):
        return
    batch = load_batch()
    items = batch.get("items", [])
    photos = sum(1 for it in items if it.get("image"))
    if not items:
        bot.reply_to(message, "📭 Текущая пачка пуста. Пересылайте сообщения сюда!")
        return
    bot.reply_to(
        message,
        f"📋 В текущей пачке:\n"
        f"• Всего сообщений: {len(items)}\n"
        f"• Скриншотов/картинок: {photos}\n\n"
        f"Когда закончите пересылать, напишите в окне Antigravity: «Ну что, прочитал?»"
    )

@bot.message_handler(commands=['clear'])
def cmd_clear(message):
    if not is_authorized(message):
        return
    archive_current_batch()
    bot.reply_to(message, "🗑 Пачка правок очищена (предыдущая перенесена в архив).")

@bot.message_handler(commands=['done'])
def cmd_done(message):
    if not is_authorized(message):
        return
    batch = load_batch()
    items = batch.get("items", [])
    photos = sum(1 for it in items if it.get("image"))
    bot.reply_to(
        message,
        f"✅ Пачка зафиксирована!\n"
        f"Сообщений: {len(items)}, фото: {photos}.\n\n"
        f"Теперь перейдите в Antigravity и напишите: «Ну что, прочитал?»"
    )

@bot.message_handler(content_types=['text', 'photo', 'document'])
def handle_incoming_message(message):
    if not is_authorized(message):
        return

    batch = load_batch()
    now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    ts_file = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
    
    forward_from = None
    if message.forward_from:
        forward_from = message.forward_from.first_name
        if message.forward_from.last_name:
            forward_from += f" {message.forward_from.last_name}"
        if message.forward_from.username:
            forward_from += f" (@{message.forward_from.username})"
    elif message.forward_sender_name:
        forward_from = message.forward_sender_name

    text = message.text or message.caption or ""
    image_rel_path = None

    if message.photo:
        # Get highest resolution
        file_info = bot.get_file(message.photo[-1].file_id)
        downloaded = bot.download_file(file_info.file_path)
        img_filename = f"img_{ts_file}_{message.message_id}.jpg"
        img_full_path = IMAGES_DIR / img_filename
        with open(img_full_path, "wb") as f:
            f.write(downloaded)
        image_rel_path = f"client_inbox/images/{img_filename}"

    elif message.document and (message.document.mime_type or "").startswith("image/"):
        file_info = bot.get_file(message.document.file_id)
        downloaded = bot.download_file(file_info.file_path)
        ext = Path(message.document.file_name or "img.jpg").suffix or ".jpg"
        img_filename = f"doc_{ts_file}_{message.message_id}{ext}"
        img_full_path = IMAGES_DIR / img_filename
        with open(img_full_path, "wb") as f:
            f.write(downloaded)
        image_rel_path = f"client_inbox/images/{img_filename}"

    item = {
        "id": len(batch["items"]) + 1,
        "time": now_str,
        "type": "photo" if image_rel_path else "text",
        "text": text.strip(),
        "image": image_rel_path,
        "forwarded_from": forward_from,
        "telegram_msg_id": message.message_id
    }
    batch["items"].append(item)
    save_batch(batch)

    photos_cnt = sum(1 for it in batch["items"] if it.get("image"))
    bot.reply_to(
        message,
        f"📥 Сохранено (#{item['id']}). Всего: {len(batch['items'])} сообщ., {photos_cnt} фото."
    )

if __name__ == "__main__":
    print("🤖 Telegram Feedback Collector Bot запущен и слушает сообщения...")
    bot.infinity_polling(timeout=20, long_polling_timeout=20)
