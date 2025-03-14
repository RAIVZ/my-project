// const burger = document.querySelector(".burger-menu");
// const nav = document.querySelector(".nav-list");

// burger.addEventListener("click", () => {
//   nav.classList.toggle("active");
// });

// const balance = document.querySelector("#balance");

// const replenish = document.querySelector(".grid-replenish");

// const take = document.querySelector(".grid-take");

// const examination = document.querySelector(".grid-examination");


// replenish.addEventListener("click", function () {
//   let currentBalance = balance.value;  
//   currentBalance = parseInt(currentBalance.substring(8, currentBalance.length - 1));
//   let amount = parseInt(prompt("Введите сумму пополнения:"));

//   if (!isNaN(amount) && amount > 0) {
//     currentBalance += amount;
//     balance.value = "Баланс: " + currentBalance + "р";
// } else {
//     alert("Некорректная сумма!");
// }
// });

// take.addEventListener("click", function () {
//   let currentBalance = balance.value;  
//   currentBalance = parseInt(currentBalance.substring(8, currentBalance.length - 1));
//   let amount = parseInt(prompt("Введите сумму для снятия:"));

//   if (!isNaN(amount) && amount > 0) {
//     currentBalance -= amount;
//     balance.value = "Баланс: " + currentBalance + "р";
// } else {
//     alert("Некорректная сумма!");
// }
// });

// examination.addEventListener("click", function () {
//   let currentBalance = balance.value;  
//   currentBalance = parseInt(currentBalance.substring(8, currentBalance.length - 1));
//   alert(`Ваш баланс составляет: ${currentBalance}`);
// });

