"use strict";

const menu = document.querySelector("nav .container ul");
const navItems = menu.querySelectorAll("li");

function changeActiveClass() {
  navItems.forEach((item) => {
    const link = item.querySelector("a");
    link.classList.remove("active");
  });
}

navItems.forEach((item) => {
  const link = item.querySelector("a");
  link.addEventListener("click", () => {
    changeActiveClass();
    link.classList.add("active");
  });
});
