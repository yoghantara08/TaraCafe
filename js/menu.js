const menuText1 = document.querySelector(".menu-text h5");
const menuText2 = document.querySelector(".menu-text h3:nth-child(2)");
const menuText3 = document.querySelector(".menu-text h3:nth-child(3)");
const menuText4 = document.querySelector(".menu-text p");

const menuList1 = document.querySelector(".menu-list p:nth-child(1)");
const menuList2 = document.querySelector(".menu-list p:nth-child(3)");
const menuList3 = document.querySelector(".menu-list p:nth-child(5)");

// Default in HTML
const carouselInner = document.querySelector(".carousel-inner");
const rightMenuImage = document.querySelector(".right-img-menu");
carouselInner.innerHTML = carouselMenuImage("coffee1.png", "coffee2.png", "coffee3.png");
rightMenuImage.innerHTML = rightImage("coffee-square.png");

const coffee = document.querySelector(".coffee");
coffee.addEventListener("click", (e) => {
  e.preventDefault();
  carouselInner.innerHTML = carouselMenuImage("coffee1.png", "coffee2.png", "coffee3.png");
});

function carouselMenuImage(img1, img2, img3) {
  return `<div class="carousel-item border-menu-image active">
            <img src="img/menu/${img1}" alt="" class="img-fluid menu-image" />
        </div>
        <div class="carousel-item border-menu-image">
            <img src="img/menu/${img2}" alt="" class="img-fluid menu-image" />
        </div>
        <div class="carousel-item border-menu-image">
            <img src="img/menu/${img3}" alt="" class="img-fluid menu-image" />
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>`;
}

function rightImage(image) {
  return `<img src="img/menu/${image}" alt="" class="img-fluid right-menu-image" />`;
}
