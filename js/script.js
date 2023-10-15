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

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Предотвращаем стандартное действие отправки формы

  // Собираем данные из формы
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Создаем объект FormData для отправки данных на сервер
  var formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  // Отправляем данные на серверный скрипт (замените "form.php" на ваш серверный скрипт)
  fetch("form.php", {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      if (response.ok) {
        alert("Ваше сообщение успешно отправлено.");
      } else {
        alert("Произошла ошибка при отправке сообщения.");
      }
    })
    .catch(function (error) {
      console.error("Ошибка при отправке данных на сервер:", error);
    });
});
