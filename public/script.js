"use strict"
// Логика бургер меню
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header_burger');
  const nav    = document.querySelector('.header-nav');
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    nav.classList.toggle('open');
  });
});

// ЧАТ
const form = document.querySelector('.chat__form');
const input = document.querySelector('.chat__input');
const messages = document.querySelector('.chat__messages');

form.addEventListener('submit', ev => {
  ev.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  // Создаём <div class="chat__message">…</div>
  const msg = document.createElement('div');
  msg.className = 'chat__message';
  msg.textContent = text;
  messages.append(msg);

  // Сбрасываем поле и скроллим вниз
  input.value = '';
  messages.scrollTop = messages.scrollHeight;
});