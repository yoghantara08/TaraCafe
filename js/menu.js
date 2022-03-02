// Default in HTML
const carouselInner = document.querySelector(".carousel-menu");
const rightMenuImage = document.querySelector(".right-img-menu");
carouselInner.innerHTML = carouselMenuImage("coffee1.png", "coffee2.png", "coffee3.png");
rightMenuImage.innerHTML = rightImage("coffee-square.png");

// More Menu (Coffee)
const coffee = document.querySelector(".coffee");
coffee.addEventListener("click", (e) => {
  imgCoffee(e);
  textCoffee();
  animateOnClick();
});
// More Menu (Desserts)
const desserts = document.querySelector(".desserts");
desserts.addEventListener("click", (e) => {
  imgDesserts(e);
  textDesserts();
  animateOnClick();
});
// More Menu (Breakfast)
const breakfast = document.querySelector(".breakfast");
breakfast.addEventListener("click", (e) => {
  imgBreakfast(e);
  textBreakfast();
  animateOnClick();
});

function carouselMenuImage(img1, img2, img3) {
  return `<div class="carousel-item border-menu-image active">
            <img src="img/menu/${img1}" alt="" class="img-fluid menu-image" />
        </div>
        <div class="carousel-item border-menu-image">
            <img src="img/menu/${img2}" alt="" class="img-fluid menu-image" />
        </div>
        <div class="carousel-item border-menu-image">
            <img src="img/menu/${img3}" alt="" class="img-fluid menu-image"/>
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

function animateOnClick() {
  const menuList = document.querySelector(".menu-list");
  const menuText = document.querySelector(".menu-text-header");

  carouselInner.classList.add("fade");
  rightMenuImage.classList.add("fade");
  menuList.classList.add("slideIn");
  menuText.classList.add("fade");
  setTimeout(() => {
    carouselInner.classList.remove("fade");
    rightMenuImage.classList.remove("fade");
    menuList.classList.remove("slideIn");
    menuText.classList.remove("fade");
  }, 600);
}

function imgCoffee(e) {
  e.preventDefault();
  carouselInner.innerHTML = carouselMenuImage("coffee1.png", "coffee2.png", "coffee3.png");
  rightMenuImage.innerHTML = rightImage("coffee-square.png");
}
function imgDesserts(e) {
  e.preventDefault();
  carouselInner.innerHTML = carouselMenuImage("desert1.png", "desert2.png", "desert3.png");
  rightMenuImage.innerHTML = rightImage("desert-square.png");
}
function imgBreakfast(e) {
  e.preventDefault();
  carouselInner.innerHTML = carouselMenuImage("breakfast1.png", "breakfast2.png", "breakfast3.png");
  rightMenuImage.innerHTML = rightImage("breakfast-square.png");
}

const menuText1 = document.querySelector(".menu-text h5");
const menuText2 = document.querySelector(".menu-text h3:nth-child(2)");
const menuText3 = document.querySelector(".menu-text h3:nth-child(3)");
const menuText4 = document.querySelector(".menu-text p");
const menuList1 = document.querySelector(".menu-list p:nth-child(1)");
const menuList2 = document.querySelector(".menu-list p:nth-child(3)");
const menuList3 = document.querySelector(".menu-list p:nth-child(5)");

function textCoffee() {
  menuText1.textContent = "Our Coffee";
  menuText2.textContent = "Choose Your";
  menuText3.textContent = "Favorite Coffee";
  menuText4.textContent = "More than 30+ type of coffee are ready to serve by our professionals.";
  menuList1.textContent = "Cappucino";
  menuList2.textContent = "Late";
  menuList3.textContent = "Arabica";
}
function textDesserts() {
  menuText1.textContent = "Our Desserts";
  menuText2.textContent = "Choose Your";
  menuText3.textContent = "Favorite Desserts";
  menuText4.textContent = "Life is short and unpredictable. Eat the dessert first!";
  menuList1.textContent = "Cake";
  menuList2.textContent = "Ice Cream";
  menuList3.textContent = "Brownies";
}
function textBreakfast() {
  menuText1.textContent = "Our Breakfast";
  menuText2.textContent = "Start your day";
  menuText3.textContent = "With Breakfast";
  menuText4.textContent = "All happiness depends on a leisurely Breakfast!";
  menuList1.textContent = "Pancake";
  menuList2.textContent = "Fried Egg";
  menuList3.textContent = "Cereal";
}
