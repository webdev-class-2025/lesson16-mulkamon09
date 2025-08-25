[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/u0mj6P2A)
# Lesson-16
# 🏠 Домашнее задание: Условные конструкции в JavaScript

## 📚 Темы уроков

- Урок 13: Подключение JavaScript
- Урок 14: Переменные и типы данных
- Урок 15: Операторы и выражения
- Урок 16: Условные конструкции (`if`, `else`, `switch-case`)

---

## 🎯 Цель

Создать JavaScript-модуль, который имитирует логику будущего веб-приложения, используя условные конструкции для принятия решений.

---

## 🧱 Структура проекта

project-folder/
├── index.html
└── script.js

---

## 🔧 Шаги выполнения
# 1. index.html

- Создайте базовую HTML-страницу с заголовком: Информация о пользователе

- Добавьте краткое описание

- Подключите файл script.js с помощью тега <script src="script.js"></script>

# 2. script.js
🔹 Объявите переменные:

- role — 'admin', 'user', 'guest'

- subscription — 'free', 'pro', 'enterprise'

- productStatus — 'available', 'out-of-stock', 'sale'

🔹 Реализуйте:

- Проверку role с if-else:

- admin → Полный доступ

- user → Ограниченный доступ

- guest → Только просмотр

- другое → Неизвестный пользователь

🔹 Проверку subscription через switch-case:

- 'free' → Минимум функций

- 'pro' → Полный доступ

- 'enterprise' → VIP-поддержка

- default → Неизвестный тариф

🔹 Комбинированную логику для productStatus:

- Если available и подписка pro или enterprise → Можно заказать

- Если sale и роль user или guest → Доступна акция

- Если out-of-stock → Товар недоступен

# Выведите все сообщения в console.log()

# Проверьте типы переменных с помощью typeof

# Добавьте поясняющие комментарии к коду
