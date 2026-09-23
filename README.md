# NSP Law Redesign — Editorial Brutalism (noth.in style)

Концептуальный редизайн официального сайта адвокатского бюро **NSP Law** (Некторов, Савельев и Партнеры) в стилистике парижского дизайн-бюро **noth.in**.

## 🌐 Live Demo (GitHub Pages)

👉 **[Открыть сайт на телефоне / ПК](https://watizzzlove.github.io/redisign-nsplaw/)**

---

## 🎨 Концепция дизайна: Pure-Light Editorial Brutalism

В отличие от шаблонных сайтов юридических фирм с античными статуями и скучными синими плашками, концепт построен на принципах **европейского журнального люкса и брутализма**:
* **Цветовая палитра:**
  * Фоновый цвет: чистый белый `#FFFFFF` / теплый `#FAFAF9`
  * Типографика: контрастный глубокий черный `#0A0A0A`
  * Акцент бренда: королевский винный/сливовый `#5F1358` (`rgb(95, 19, 88)`)
* **Главный экран (Hero):**
  * Монументальные литеры **`N S P ’`** на всю ширину экрана.
  * Интерактивный hover: при наведении литеры окрашиваются в сливовый `#5F1358`, приподнимаются и раскрывают имя партнера (`[ Alexander Nektorov • Managing Partner ]`, `[ Mikhail Saveliev • M&A & Corporate Partner ]`, `[ Partners & Advocates • Est. 2006 ]`).
  * Интерактивный Canvas со сливовыми шлейфами за курсором.
  * Фирменная компоновка noth.in: лаконичный 2-строчный манифест и капсульная кнопка `Book a call` слева вверху, вертикальное меню с 4-точечной иконкой справа вверху, реквизиты и ссылки внизу.
* **Физический плавный курсор (`SmoothCursor`):**
  * Пружинные анимации (`motion/react` spring physics) с кинематическим поворотом по вектору движения.
  * Интерактивная трансформация в сливовую пилюлю `( explore ↗ )` при наведении на кликабельные объекты.
* **Практики (`WorksList`):**
  * Строгие журнальные строки с волосковыми разделителями и индексами `01`–`04`.
  * Плавающие виньетки с превью кейса и метрикой спора, следующие за курсором.
* **Ростер партнеров (`PeopleRoster`):**
  * *«NSP without people is nothin’»*.
  * Копирование email за 1 клик с визуальным откликом `copied` и прямые ссылки в Telegram.
* **Брифинг (`ConsultationModal`):**
  * Лаконичная форма под грифом адвокатской тайны (NDA) и селектором практик.

---

## 📁 Структура репозитория

```
redisign-nsplaw/
├── prototype-nothin/         # Основной прототип (React 19 + TypeScript + Tailwind v4 + Motion)
│   ├── src/
│   │   ├── components/       # InteractiveHero, WorksList, PhilosophySection, PeopleRoster, etc.
│   │   ├── App.tsx
│   │   ├── index.css         # Стили, шрифты, капсульные кнопки .btn-nothin
│   │   └── main.tsx
│   ├── public/assets/        # Превью кейсов, иконки
│   └── vite.config.ts
├── prototype/                # Альтернативный темный прототип (LMNTRIX Cyber-Tech Edition)
│   └── index.html
└── README.md
```

---

## 💻 Локальный запуск

```bash
# Клонировать репозиторий
git clone https://github.com/Watizzzlove/redisign-nsplaw.git
cd redisign-nsplaw/prototype-nothin

# Установить зависимости
npm install

# Запустить локальный сервер
npm run dev
```

Сервер запустится на `http://localhost:5173/`.
