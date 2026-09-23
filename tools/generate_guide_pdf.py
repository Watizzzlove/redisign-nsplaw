import subprocess
import os
import shutil

html_content = """<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>Памятка: Правила загрузки фото на Яндекс.Диск для Tilda-конструктора</title>
<style>
  @page {
    size: A4;
    margin: 15mm 18mm 15mm 18mm;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 13.5px;
    line-height: 1.5;
    color: #1c1d1f;
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 21px;
    margin: 0 0 12px;
    color: #111;
    border-bottom: 2.5px solid #f5a20a;
    padding-bottom: 7px;
  }
  h2 {
    font-size: 15px;
    margin: 16px 0 10px;
    color: #222;
    background: #fbf9f4;
    padding: 6px 12px;
    border-left: 4px solid #f5a20a;
    border-radius: 4px;
  }
  .page-break {
    page-break-before: always;
  }
  p {
    margin: 0 0 8px;
  }
  .highlight-box {
    background: #fff9ed;
    border: 1.5px solid #fde4ad;
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 14px;
  }
  .highlight-box strong.title {
    font-size: 14.5px;
    color: #8c5300;
    display: block;
    margin-bottom: 8px;
  }
  .highlight-box ol {
    margin: 0;
    padding-left: 22px;
  }
  .highlight-box li {
    margin-bottom: 6px;
  }
  code {
    font-family: 'Consolas', 'Courier New', monospace;
    background: #f1efea;
    padding: 1px 5px;
    border-radius: 3px;
    font-size: 12.5px;
    color: #8c5300;
    font-weight: bold;
  }
  pre {
    font-family: 'Consolas', 'Courier New', monospace;
    background: #f8f7f4;
    border: 1px solid #e2ded5;
    border-radius: 6px;
    padding: 12px 14px;
    font-size: 12px;
    line-height: 1.4;
    margin: 8px 0 14px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 12px;
    font-size: 12.5px;
  }
  th, td {
    border: 1px solid #e5e3de;
    padding: 7px 11px;
    text-align: left;
    vertical-align: top;
  }
  th {
    background: #f8f7f4;
    font-weight: 700;
  }
  .bad {
    color: #c5221f;
    text-decoration: line-through;
    font-weight: 600;
  }
  .good {
    color: #137333;
    font-weight: 600;
  }
  .nuance-item {
    margin-bottom: 10px;
    padding: 8px 12px;
    background: #f9f9f8;
    border-radius: 6px;
    border-left: 3.5px solid #6f7278;
    font-size: 13px;
    line-height: 1.45;
  }
</style>
</head>
<body>

<h1>Памятка: Правила загрузки фото на Яндекс.Диск для Tilda-конструктора</h1>

<div class="highlight-box">
  <strong class="title">⚡ Главные базовые требования (Обязательно к соблюдению):</strong>
  <ol>
    <li><strong>Только латиница и строчные буквы:</strong> названия всех папок и файлов пишутся английскими маленькими буквами без пробелов (<span class="good">beige</span>, <span class="good">porch</span>, <span class="good">main.jpg</span>). Русские буквы запрещены (<span class="bad">Бежевый</span>, <span class="bad">Крыльцо</span>).</li>
    <li><strong>Английская строчная «x» и точка:</strong> в размерах строго английский икс <code>x</code> и точка для дробей (<span class="good">5x6</span>, <span class="good">2.3x5</span>, <span class="good">1.5x2.4</span>). Русская буква <span class="bad">х</span> или знак <span class="bad">×</span> ломают чтение.</li>
    <li><strong>Формат цены <code>__p</code>:</strong> стоимость указывается через два подчеркивания слитно без пробелов (<span class="good">5x6__p1492000</span>, <span class="good">5x2__p1579000</span>).</li>
    <li><strong>Главное фото — строго <code>main.jpg</code>:</strong> первый кадр в галерее всегда должен иметь имя <code>main.jpg</code>.</li>
    <li><strong>Оптимизация файлов:</strong> форматы <code>.jpg</code> (рекомендуется), <code>.png</code>, <code>.webp</code>. Разрешение ~1920×1080 px, оптимальный вес 300 КБ – 1.8 МБ (не загружайте тяжелые файлы по 15–20 МБ).</li>
  </ol>
</div>

<h2>1. Именование фотографий и порядок показа в галерее</h2>
<p>Конструктор автоматически выстраивает слайды по префиксу в названии файла:</p>
<table>
  <tr>
    <th style="width: 26%;">Имя файла</th>
    <th style="width: 34%;">Назначение кадра</th>
    <th style="width: 40%;">Особенности</th>
  </tr>
  <tr>
    <td><code>main.jpg</code></td>
    <td><strong>Главный фасад (Обложка)</strong></td>
    <td>Первое изображение, открывается по умолчанию</td>
  </tr>
  <tr>
    <td><code>exterior_2.jpg</code>, <code>exterior_3.jpg</code></td>
    <td>Дополнительные ракурсы снаружи</td>
    <td>Если у террасы 2 варианта исполнения: первый — <code>main.jpg</code>, второй — <code>exterior_2.jpg</code></td>
  </tr>
  <tr>
    <td><code>plan_1.jpg</code>, <code>plan_2.jpg</code></td>
    <td><strong>Планировки и чертежи</strong></td>
    <td>Отображаются в карусели целиком без обрезки по краям</td>
  </tr>
  <tr>
    <td><code>interior_1.jpg</code>, <code>interior_2.jpg</code></td>
    <td>Интерьер, комнаты, парная</td>
    <td>Внутренняя отделка и планировочные решения</td>
  </tr>
  <tr>
    <td><code>real_1.jpg</code>, <code>real_2.jpg</code></td>
    <td>Живые фото построенных объектов</td>
    <td>Реальные фотографии готовых построек</td>
  </tr>
</table>

<h2 class="page-break">2. Иерархия папок на Яндекс.Диске</h2>
<pre>
/houses/taiga/ (или /saunas/taiga/)
└── 5x6__p1492000/                    <-- Размер дома/бани и базовая цена
    ├── beige/                        <-- [Если есть база] Базовый вариант без террасы
    │   ├── main.jpg                  <-- Главный фасад
    │   ├── exterior_2.jpg            <-- Дополнительный ракурс
    │   └── plan_1.jpg                <-- Чертёж / планировка
    ├── bronze/                       <-- Бронза (орех / шоколад)
    ├── graphite/                     <-- Графит (антрацит / темно-серый)
    │
    ├── porch/                        <-- Вариант с КРЫЛЬЦОМ
    │   └── 1.5x2.4__p1492000/        <-- Размер крыльца и цена под ключ
    │       ├── beige/
    │       ├── bronze/
    │       └── graphite/
    │
    └── terrace/                      <-- Вариант с ТЕРРАСОЙ
        ├── covered/                  <-- КРЫТАЯ терраса
        │   └── 5x2__p1708000/        <-- Размер террасы и цена под ключ
        │       ├── beige/
        │       ├── bronze/
        │       └── graphite/
        └── open/                     <-- ОТКРЫТАЯ терраса
            └── 5x2__p1579000/        <-- Размер террасы и цена под ключ
                ├── beige/
                ├── bronze/
                └── graphite/
</pre>

<h2>3. Важные нюансы и логика работы фильтров</h2>
<div class="nuance-item">
  <strong>📁 Пустая папка vs отсутствие папки:</strong><br>
  • <em>Если вы создали папку</em> (например, цвета или размера), кнопка этого фильтра на сайте <strong>отображается</strong>. Если внутри ещё нет фотографий — конструктор автоматически покажет аккуратную брендовую заглушку.<br>
  • <em>Если папки нет вообще</em> — кнопка фильтра <strong>не появится</strong> в интерфейсе (автоматически скроется).
</div>

<div class="nuance-item">
  <strong>🎨 Доступность цветов фасада:</strong><br>
  Если в проекте не предусмотрен или временно отсутствует определенный цвет (<code>beige</code>, <code>bronze</code> или <code>graphite</code>), просто не создавайте для него папку.
</div>

<div class="nuance-item">
  <strong>🏡 Модели без «голой» базы (как баня «Тайга»):</strong><br>
  Если проект продаётся <strong>исключительно с крыльцом или террасой</strong>, не создавайте папки цветов (<code>beige/</code>, <code>bronze/</code>, <code>graphite/</code>) в корне размера. Оставьте только папки <code>porch/</code> и <code>terrace/</code> — тогда конструктор сразу выберет террасу по умолчанию, заблокирует сброс в пустоту и покажет уведомление, что модель доступна только с входной группой.
</div>

</body>
</html>
"""

base_dir = r"c:\Work\projects\houses-constructor-tilda\constructor-files"
temp_html = os.path.join(base_dir, "guide_utf8.html")
pdf_out = os.path.join(base_dir, "Инструкция_по_загрузке_фото_Яндекс_Диск.pdf")
pdf_latin = os.path.join(base_dir, "Instruktsiya_Yandex_Disk_Tilda.pdf")

with open(temp_html, "w", encoding="utf-8") as f:
    f.write(html_content)

edge_exe = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
cmd = [
    edge_exe,
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    f"--print-to-pdf={pdf_out}",
    temp_html
]

res = subprocess.run(cmd, capture_output=True)

if os.path.exists(pdf_out):
    shutil.copy2(pdf_out, pdf_latin)
    print("SUCCESS: 2-page balanced PDF generated in true UTF-8!")
else:
    print("FAILED TO GENERATE PDF")
