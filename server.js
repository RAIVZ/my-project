const path = require('path');
const express = require('express');
const app = express();

// 1) Раздаём статику из папки public
app.use(express.static(path.join(__dirname, 'public')));

// 2) Парсим JSON в теле запросов (для API)
app.use(express.json());

// 3) API-маршрут для регистрации (пример)
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;
  // TODO: валидация, сохранение в БД
  res.json({ ok: true, message: 'Пользователь создан' });
});

// 4) API-маршрут для логина (пример)
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // TODO: проверка, создание сессии / токена
  res.json({ ok: true, avatarUrl: '/img/default-avatar.png' });
});

// 5) Любой прочий GET → отдаём index.html (для SPA или пуш-state)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// 6) Слушаем порт
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));