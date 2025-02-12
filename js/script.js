const menu = document.querySelector("#mobile-menu");
const filter = document.querySelector("#mobile-filter");
const openBtn = document.querySelector("#open-menu");
const closeBtn = document.querySelector("#close-menu");

const openMenu = () => {
  menu.classList.remove("animate-close-menu");
  menu.classList.add("animate-open-menu");
  filter.classList.remove("animate-filter-off");
  filter.classList.add("animate-filter-on");
  menu.classList.add("flex");
  menu.classList.remove("hidden");
  menu.classList.remove("right-[-70%]");
  menu.classList.add("right-0");
  filter.classList.remove("hidden");
};

const closeMenu = () => {
  filter.classList.remove("animate-filter-on");
  filter.classList.add("animate-filter-off");
  menu.classList.remove("animate-open-menu");
  menu.classList.remove("right-0");
  menu.classList.add("right-[-70%]");
  menu.classList.add("animate-close-menu");
  setTimeout(() => filter.classList.add("hidden"), 900);
};

openBtn.addEventListener("click", () => openMenu());
closeBtn.addEventListener("click", () => closeMenu());
filter.addEventListener("click", () => closeMenu());
