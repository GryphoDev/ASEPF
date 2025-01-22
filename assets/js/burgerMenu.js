const menu = document.getElementById("menu");
const burgerBtn = document.getElementById("burger-menu");

burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});
