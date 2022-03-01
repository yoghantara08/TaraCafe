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

// Header
const header = document.querySelector(".header");
header.innerHTML = showHeader("index.html#home", "index.html#menu", "index.html#gallery", "index.html#reviews", "contact.html");

// Footer
const footer = document.getElementById("footer");
footer.innerHTML = showFooter();

function showHeader(home, menu, gallery, reviews, contact) {
  return `<nav class="navbar navbar-expand-lg p-1 fixed-top navbar-dark nav-scrolled-text-shadow" id="navToggler">
            <div class="container">
              <a class="navbar-brand fw-bold" href="#">TaraCafe</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto text-uppercase fs-4">
                  <li class="nav-item m-auto p-3">
                    <a class="nav-link bawah p-0" aria-current="page" href="${home}">Home</a>
                  </li>
                  <li class="nav-item m-auto p-3">
                    <a class="nav-link bawah p-0" href="${menu}">Menu</a>
                  </li>
                  <li class="nav-item m-auto p-3">
                    <a class="nav-link bawah p-0" href="${gallery}">Gallery</a>
                  </li>
                  <li class="nav-item m-auto p-3">
                    <a class="nav-link bawah p-0" href="${reviews}">Reviews</a>
                  </li>
                  <li class="nav-item m-auto p-3 pe-lg-0">
                    <a class="nav-link bawah p-0" href="${contact}">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>`;
}

function showFooter() {
  return `<div class="container-fluid footer">
            <div class="row justify-content-center">
              <div class="col-12 text-center footer-content">
                <div class="footer-title text-white">
                  <h1 class="fw-bold">TaraCafe.</h1>
                  <ul class="list-unstyled text-uppercase">
                    <li>open from 07:00 AM - 11:00 PM</li>
                    <li class="mb-3">Bali - Denpasar</li>
                  </ul>
                  <span class="me-3"><i class="fa-brands fa-instagram"></i> TaraCafe</span>
                  <span><i class="fa-brands fa-whatsapp"></i> +6281234567</span>
                </div>
              </div>
            </div>
            <div class="text-footer text-white text-center">
              <p class="m-0">
                Created with <i class="fa-solid fa-heart text-danger"></i> by <a href="https://www.instagram.com/gustutyoghantara/" target="_blank" class="text-warning">Gustut Yoghantara</a> © 2022 Copyright | All Rights Reserved
              </p>
            </div>
          </div>`;
}
