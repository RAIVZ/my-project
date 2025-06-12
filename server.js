"use strict"
const path    = require('path');
const express = require('express');
const app     = express();

// 1) Статика из public/
app.use(express.static(path.join(__dirname, 'public')));

// 2) JSON-парсер
app.use(express.json());

// 3) API-регистрация
app.post('/api/register', (req, res) => {
  console.log('REG BODY:', req.body);
  const { username, email, password, confirmPassword } = req.body;
  if (!username || !email || !password || password !== confirmPassword) {
    return res
      .status(400)
      .json({ ok: false, message: 'Неверные данные или пароли не совпадают' });
  }
  // TODO: здесь сохранение в базу
  res.json({ ok: true, message: 'Пользователь создан' });
});

// 4) API-логин
app.post('/api/login', (req, res) => {
  console.log('LOGIN BODY:', req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ ok: false, message: 'Email или пароль пусты' });
  }
  // TODO: проверка и сессия
  res.json({ ok: true, avatarUrl: '/img/default-avatar.png' });
});

// 5) SPA-фоллбек
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// 6) Старт
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server на http://localhost:${PORT}`));