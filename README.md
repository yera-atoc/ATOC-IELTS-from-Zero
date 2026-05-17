# AtoC — IELTS from Zero

Next.js 14 app — dark blue dashboard design.

## Структура файлов

```
src/
  app/
    globals.css          ← все стили (дизайн-токены)
    layout.tsx           ← корневой layout
    page.tsx             ← редирект / → /dashboard
    dashboard/page.tsx   ← главный дашборд
    login/page.tsx       ← страница входа
    lessons/page.tsx     ← уроки
    practice/page.tsx    ← тесты
    writing/page.tsx     ← письмо
    speaking/page.tsx    ← говорение
    vocabulary/page.tsx  ← словарь
    analytics/page.tsx   ← аналитика
  components/
    Sidebar.tsx          ← боковое меню (используется на всех страницах)
```

## Как загрузить на GitHub

1. Открой [github.com](https://github.com) → нажми **New repository**
2. Назови `ATOC---IELTS-from-Zero`, выбери **Public**, нажми **Create**
3. Скачай ZIP этого проекта
4. На странице нового репозитория нажми **uploading an existing file**
5. Перетащи ВСЕ файлы сохраняя структуру папок → нажми **Commit changes**

## Как задеплоить на Vercel

1. Открой [vercel.com](https://vercel.com) → **Add New Project**
2. Выбери свой GitHub репозиторий `ATOC---IELTS-from-Zero`
3. Vercel автоматически определит Next.js
4. Нажми **Deploy** — готово!

## Локальный запуск

```bash
npm install
npm run dev
# открой http://localhost:3000
```
