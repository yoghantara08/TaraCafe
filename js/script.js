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

function show() {
  return `<!-- Navbar -->
  <nav class="navbar navbar-expand-lg p-1 fixed-top navbar-dark nav-scrolled-text-shadow" id="navToggler">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">TaraCafe</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto text-uppercase fs-4">
          <li class="nav-item m-auto p-3">
            <a class="nav-link bawah p-0" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item m-auto p-3">
            <a class="nav-link bawah p-0" href="#menu">Menu</a>
          </li>
          <li class="nav-item m-auto p-3">
            <a class="nav-link bawah p-0" href="#gallery">Gallery</a>
          </li>
          <li class="nav-item m-auto p-3">
            <a class="nav-link bawah p-0" href="#reviews">Reviews</a>
          </li>
          <li class="nav-item m-auto p-3 pe-lg-0">
            <a class="nav-link bawah p-0" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Akhir Navbar -->

  <!-- Jumbotron -->
  <div class="container-fluid jumbotron">
    <div class="container">
      <div class="jumbotron-text text-center">
        <h3 class="m-0 text-warning">COFFEE</h3>
        <h1 class="m-0">Enjoy Your</h1>
        <h1 class="m-0 fw-bold">Morning Coffee.</h1>
        <p class="m-0 pt-3">Boost your productivity and build your</p>
        <p class="m-0">mood with a glass of coffee in the morning.</p>
        <div class="jumbotron-button text-center mt-5">
          <button type="button" class="btn btn-success pe-4 ps-4 pt-3 pb-3">Get Your Now</button>
          <button type="button" class="btn btn-link ms-3 pe-4 ps-4 pt-3 pb-3 text-white">Reservation</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Akhir Jumbotron -->

  <!-- Menu -->
  <div class="container menu" id="menu">
    <!-- Sponsor -->
    <div class="row justify-content-center sponsor">
      <div class="col-lg-2 col-3 align-items-center d-flex">
        <img src="img/logo/abc.png" alt="" class="img-fluid" />
      </div>
      <div class="col-lg-2 col-3 align-items-center d-flex">
        <img src="img/logo/ceremix.png" alt="" class="img-fluid" />
      </div>
      <div class="col-lg-2 col-3 align-items-center d-flex">
        <img src="img/logo/nescafe.png" alt="" class="img-fluid" />
      </div>
      <div class="col-lg-2 col-3 align-items-center d-flex">
        <img src="img/logo/garudafood.png" alt="" class="img-fluid" />
      </div>
    </div>
    <!-- Menu Content -->
    <div class="menu-title">
      <h2 class="text-center fw-bold mt-3">MENU</h2>
    </div>
    <div class="row mt-lg-5 mt-4">
      <div class="col-md-6 d-flex order-md-1 position-relative">
        <div class="menu-text ps-2 mt-lg-5">
          <h5 class="fs-5">Our Coffee</h5>
          <h3 class="fw-bold fs-1">Choose Your</h3>
          <h3 class="fw-bold fs-1">Favorite Coffee</h3>
          <p class="text-secondary">More than 30+ type of coffee are ready to serve by our professionals.</p>
          <!-- Menu list -->
          <div class="menu-list d-flex mt-4 mb-4">
            <p class="m-0">Cappucino</p>
            <span class="ms-2 me-2">-</span>
            <p class="m-0">Late</p>
            <span class="ms-2 me-2">-</span>
            <p class="m-0">Arabica</p>
          </div>
          <!-- Menu Dropdown -->
          <div class="dropdown mb-4">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">More Menu</button>
            <ul class="dropdown-menu dropdown-menu-dark mt-2" aria-labelledby="dropdownMenuButton2">
              <li><a class="dropdown-item" href="#menu">Coffee</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#menu">Desserts</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#menu">Breakfast</a></li>
            </ul>
          </div>
        </div>
        <div class="right-img-menu position-absolute d-none d-lg-block">
          <img src="img/menu/coffee2.png" alt="" class="img-fluid" />
        </div>
      </div>
      <div class="col-md-6 justify-content-center d-flex position-relative">
        <div class="menu-image d-flex me-md-3 justify-content-center">
          <div class="border-menu-image">
            <img src="img/menu/coffee.png" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Akhir Menu -->

  <!-- Gallery -->
  <div class="container-fluid" id="gallery">
    <div class="menu-title mb-3">
      <h2 class="text-center fw-bold">Gallery</h2>
    </div>
    <div class="container-fluid gallery">
      <div class="row">
        <!-- Left Landscape -->
        <div class="col-lg-4 mt-lg-5">
          <div class="row">
            <div class="landscape-gallery">
              <img src="img/gallery/landscape1.jpg" alt="" class="img-fluid" />
            </div>
          </div>
          <h2 class="mt-3 mb-3 text-center"></h2>
          <div class="row">
            <div class="landscape-gallery">
              <img src="img/gallery/landscape2.jpg" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
        <!-- Potrait -->
        <div id="carouselExampleControls" class="carousel slide col-lg-4 mt-3 mb-3" data-bs-ride="carousel">
          <div class="carousel-inner potrait-gallery">
            <div class="carousel-item active">
              <img src="img/gallery/potrait1.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="img/gallery/potrait2.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="img/gallery/potrait3.png" class="d-block w-100" alt="..." />
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <!-- Right Landscape -->
        <div class="col-lg-4 mt-lg-5">
          <div class="row">
            <div class="landscape-gallery">
              <img src="img/gallery/landscape3.jpg" alt="" class="img-fluid" />
            </div>
          </div>
          <h2 class="mt-3 mb-3 text-center"></h2>
          <div class="row">
            <div class="landscape-gallery">
              <img src="img/gallery/landscape4.jpg" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Akhir Gallery -->

  <!-- Reviews -->
  <div class="container-fluid" id="reviews">
    <div class="container">
      <div class="menu-title mb-5">
        <h2 class="fw-bold text-center">Customer Reviews</h2>
      </div>

      <div class="row review align-items-center justify-content-center">
        <!-- 1 -->
        <div class="col-lg-6 mb-3">
          <div class="review-box">
            <div class="box-top">
              <div class="profile">
                <div class="profile-img">
                  <img src="img/review/review1.jpg" />
                </div>
                <div class="name-user">
                  <strong>Olivia</strong>
                  <span>@oliviavankovic</span>
                </div>
              </div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>
            <div class="customer-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis
                sed atque cumque.
              </p>
            </div>
          </div>
        </div>
        <!-- 2 -->
        <div class="col-lg-6 mb-3">
          <div class="review-box">
            <div class="box-top">
              <div class="profile">
                <div class="profile-img">
                  <img src="img/review/review2.jpg" />
                </div>
                <div class="name-user">
                  <strong>Julian Wan</strong>
                  <span>@julianwan</span>
                </div>
              </div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <div class="customer-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis
                sed atque cumque.
              </p>
            </div>
          </div>
        </div>
        <!-- 3 -->
        <div class="col-lg-6 mb-3">
          <div class="review-box">
            <div class="box-top">
              <div class="profile">
                <div class="profile-img">
                  <img src="img/review/review3.jpg" />
                </div>
                <div class="name-user">
                  <strong>Vicky</strong>
                  <span>@vicccryad</span>
                </div>
              </div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>
            <div class="customer-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis
                sed atque cumque.
              </p>
            </div>
          </div>
        </div>
        <!-- 4 -->
        <div class="col-lg-6 mb-3">
          <div class="review-box">
            <div class="box-top">
              <div class="profile">
                <div class="profile-img">
                  <img src="img/review/review4.jpg" />
                </div>
                <div class="name-user">
                  <strong>Mila Aunda</strong>
                  <span>@aundamila05</span>
                </div>
              </div>
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <div class="customer-comment">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis
                sed atque cumque.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center text-black-50 pt-3 read-all">Read all reviews <img src="https://img.icons8.com/ios-filled/14/000000/up-right-arrow.png" /></p>
    </div>
  </div>
  <!-- Akhir Reviews -->`;
}
