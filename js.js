const burger = document.querySelector(".burger-menu");
const nav = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});