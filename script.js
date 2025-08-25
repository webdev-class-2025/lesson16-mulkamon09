// Объявление переменных
let role = "guest";
let subscription = "enterprise";
let productStatus = "sale";

// Функция для вывода роли
function checkRole(role) {
  switch (role) {
    case "admin":
      return "Полный доступ к системе";
    case "user":
      return "Ограниченный доступ";
    case "guest":
      return "Только просмотр";
    default:
      return "Неизвестный пользователь";
  }
}

// Функция для вывода информации о подписке
function checkSubscription(subscription) {
  switch (subscription) {
    case "free":
      return "Минимальный функционал";
    case "pro":
      return "Полный доступ к возможностям";
    case "enterprise":
      return "VIP-обслуживание";
    default:
      return "Тариф не определён";
  }
}

// Функция для обработки состояния товара
function checkProductStatus(productStatus, role, subscription) {
  switch (productStatus) {
    case "available":
      if (subscription === "pro" || subscription === "enterprise") {
        return "Можно заказать";
      }
      break;
    case "sale":
      if (role === "user" || role === "guest") {
        return "Доступна акция";
      }
      break;
    case "out-of-stock":
      return "Товар временно недоступен";
    default:
      return "Невозможное состояние товара";
  }
}

// Выводим результаты в консоль
console.log(checkRole(role)); // Выводит роль
console.log(checkSubscription(subscription)); // Выводит тариф
console.log(checkProductStatus(productStatus, role, subscription)); // Выводит статус товара

// Выводим все переменные
console.log(`Роль: ${role}`);
console.log(`Тариф: ${subscription}`);
console.log(`Статус товара: ${productStatus}`);
