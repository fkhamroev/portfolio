var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    // Когда ширина экрана меньше или равна 992px
    992: {
      slidesPerView: 2,
    },
  },
});

function scrollToTop() {
  window.scrollTo(0, 0);
}

function redirectToPage(url) {
  window.location.href = "../pages/thanks.html";
}

let submit = document.querySelector(".form-submit");

submit.addEventListener("submit", function (e) {
  e.preventDefault();
  redirectToPage();
});

let burger = document.querySelector(".header-burger");
let menu = document.querySelector(".header-menu");
let close = document.querySelector(".header-close");

function closeMenu() {
  menu.classList.remove("show");
}
close.addEventListener("click", function (e) {
  e.preventDefault();
  closeMenu();
});

burger.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.toggle("show");
});
var menuItems = document.querySelectorAll(".header-link");
menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    menu.classList.remove("show");
  });
});
document.addEventListener("click", function (event) {
  var isClickInsideMenu = menu.contains(event.target);
  var isClickInsideButton = burger.contains(event.target);

  if (!isClickInsideMenu && !isClickInsideButton) {
    closeMenu();
  }
});
