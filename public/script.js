"use strict"

document.addEventListener('DOMContentLoaded', () => {
  const loginSection  = document.getElementById('headerLogin');
  const userSection   = document.getElementById('headerUser');
  const loginBtn      = document.getElementById('loginBtn');
  const logoutBtn     = document.getElementById('logoutBtn');
  const avatarInput   = document.getElementById('avatarInput');
  const avatarImg     = document.getElementById('avatarImg');

  // Проверка состояния (для демонстрации используем localStorage)
  function updateUI() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.avatarUrl) {
      avatarImg.src = user.avatarUrl;
      loginSection.style.display = 'none';
      userSection.style.display = 'flex';
    } else {
      loginSection.style.display = 'block';
      userSection.style.display = 'none';
    }
  }

  // Обработчик Войти (для демо — сохраняем фиктивного пользователя)
  loginBtn.addEventListener('click', () => {
    const dummyUser = { avatarUrl: 'img/default-avatar.png' };
    localStorage.setItem('user', JSON.stringify(dummyUser));
    updateUI();
  });

  // Обработчик Выйти
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('user');
    updateUI();
  });

  // Смена аватара
  avatarInput.addEventListener('change', () => {
    const file = avatarInput.files[0];
    if (!file) return;
    const rd = new FileReader();
    rd.onload = e => {
      avatarImg.src = e.target.result;
      const user = JSON.parse(localStorage.getItem('user')) || {};
      user.avatarUrl = e.target.result;
      localStorage.setItem('user', JSON.stringify(user));
    };
    rd.readAsDataURL(file);
  });

  updateUI();
});

document.getElementById('registerForm').addEventListener('submit', async e => {
  e.preventDefault();
  const data = {
    username: e.target.username.value,
    email: e.target.email.value,
    password: e.target.password.value,
    confirmPassword: e.target.confirmPassword.value
  };
  if (data.password !== data.confirmPassword) {
    alert('Пароли не совпадают');
    return;
  }
  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw await res.text();
    alert('Регистрация прошла успешно');
    window.location.href = '/login';
  } catch (err) {
    console.error(err);
    alert('Ошибка регистрации: ' + err);
  }
});