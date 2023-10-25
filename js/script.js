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
