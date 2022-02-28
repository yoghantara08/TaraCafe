document.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const navToggler = document.getElementById("navToggler");
  const navLink = document.querySelectorAll(".nav-link");

  if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
    navbar.classList.add("nav-scrolled");
    navbar.classList.remove("nav-scrolled-text-shadow");
    navToggler.classList.replace("navbar-dark", "navbar-light");
    navLink.forEach((e) => e.classList.remove("bawah"));
  } else {
    navbar.classList.add("nav-scrolled-text-shadow");
    navbar.classList.remove("nav-scrolled");
    navToggler.classList.replace("navbar-light", "navbar-dark");
    navLink.forEach((e) => e.classList.add("bawah"));
  }
});
