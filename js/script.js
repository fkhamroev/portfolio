var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});

// function scrollToTop() {
//   window.scrollTo(0, 0);
// }

// function redirectToPage(url) {
//   window.location.href = "../pages/thanks.html";
// }

// let submit = document.querySelector(".form-submit");

// submit.addEventListener("click", function (e) {
//   e.preventDefault();
//   redirectToPage();
// });
