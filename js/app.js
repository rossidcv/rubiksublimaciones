// Efecto menú hamburger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar-nav");
const links = document.querySelectorAll(".navbar-nav li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
