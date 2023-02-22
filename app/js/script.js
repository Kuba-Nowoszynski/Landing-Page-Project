const menu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const menuLinks = document.querySelector(".header__menuLinks");
const openMenu = [overlay, menuLinks];
const body = document.querySelector("body");

function change() {
  header.classList.toggle("open");

  if (header.classList.contains("open")) {
    openMenu.forEach((elem) => {
      elem.classList.remove("fade-out");
      elem.classList.add("fade-in");
    });
    body.classList.add("overflow");
  } else {
    openMenu.forEach((elem) => {
      elem.classList.remove("fade-in");
      elem.classList.add("fade-out");
    });
    body.classList.remove("overflow");
  }
}

menu.addEventListener("click", change);
