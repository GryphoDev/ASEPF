const menu = document.getElementById("menu");
const burgerBtn = document.getElementById("burger-menu");
const burgerAnim = document.querySelector(".burgerAnim");

burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  burgerBtn.classList.toggle("active");
  if (!burgerBtn.classList.contains("active")) {
    burgerBtn.classList.add("unActive");
  } else {
    burgerBtn.classList.remove("unActive");
  }
});
