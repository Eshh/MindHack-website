const navbar = document.getElementById("navbar");
let scrolled = false;

window.onscroll = () => {
  window.scrollY > 500
    ? navbar.classList.remove("top")
    : navbar.classList.add("top");
};
