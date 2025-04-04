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


// const form = document.querySelector('.form');
// const errorsDiv = document.querySelector('.errors');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   errorsDiv.textContent = ''; // очистка прошлых ошибок

//   const name = form.elements.name.value.trim();
//   const email = form.elements.email.value.trim();
//   const password = form.elements.password.value;
//   const agree = form.elements.agree.checked;

//   const errors = [];

//   if (name === '') {
//     errors.push('Введите имя');
//   }

//   if (!email.includes('@')) {
//     errors.push('Введите корректный email');
//   }

//   if (password.length < 6) {
//     errors.push('Пароль должен быть не менее 6 символов');
//   }

//   if (!agree) {
//     errors.push('Вы должны принять условия');
//   }

//   if (errors.length > 0) {
//     errorsDiv.innerHTML = errors.map(err => `<div>${err}</div>`).join('');
//     return;
//   }

//   // Если ошибок нет — можно показать результат или отправить данные
//   console.log('Имя:', name);
//   console.log('Email:', email);
// });


// const tasks = ['учить js', 'делать проект'];

// localStorage.setItem('tasks', JSON.stringify(tasks)); // сохраняем

// const saved = localStorage.getItem('tasks');
// const parsed = JSON.parse(saved); // обратно в массив

// console.log(parsed);




const form = document.querySelector('.task-form');
const taskList = document.querySelector('.shop-list');

let arrShopList =  [];

const renderTasks = () =>  {
  taskList.innerHTML = '';

  arrShopList.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

   
    li.addEventListener('click', () => {
      arrShopList.splice(index, 1); 
      localStorage.setItem('tasks', JSON.stringify(arrShopList));
      renderTasks(); 
    });

    taskList.appendChild(li);
  });
}




const save = localStorage.getItem('arrShopList');
if (save) {
  arrShopList = JSON.parse(save);
  renderTasks();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = form.elements.task;
  const text = input.value.trim();

  if(text === '') return;

  arrShopList.push(text);
  localStorage.setItem('arrShopList', JSON.stringify(arrShopList));
  renderTasks();
  input.value = '';
});

// const renderTasks = () =>  {
//   taskList.innerHTML = '';

//   arrShopList.forEach((task) => {
//     const li = document.createElement('li');
//     li.textContent = task;
//     taskList.appendChild(li);
//   });
// }


const buttonClear = document.querySelector('.clear-tasks');

buttonClear.addEventListener('click', () => {
  arrShopList =  [];
  localStorage.removeItem('arrShopList'); 
  renderTasks(); 
});