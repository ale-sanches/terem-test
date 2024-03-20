//по нажатию на "Кнопка 1" скрываем и показываем блок с заголовком
$(".btn-warning").click(function () {
  $(".row-one").toggle();
});

//по нажатию на "Кнопка 2" меняем местами первые два блока второго ряда

//реализация на JS
// const secondBtn = document.querySelector(".btn-success");
// secondBtn.addEventListener("click", function () {
//   const rowTwoContainer = document.querySelector(".row-two");
//   const rowTwoItems = rowTwoContainer.querySelectorAll(".row__item");
//   const [firstItem, secondItem] = rowTwoItems;
//   rowTwoContainer.insertBefore(secondItem, firstItem);
//   console.log(rowTwoItems);
// });

//JQuery
$(".btn-success").click(function () {
  const firstItem = $(".row-two__item-one");
  const secondItem = $(".row-two__item-two");

  const firstItemCopy = firstItem.clone(true);
  firstItem.replaceWith(secondItem.clone(true));
  secondItem.replaceWith(firstItemCopy);
});

////////////////////////////////////////////////////////////
//при открытии страницы открываем модальное окно
//JS
// function toggleModalWindow() {
//   document.querySelector(".modal-window").classList.toggle("hidden");
//   document.querySelector(".overlay").classList.toggle("hidden");
// }
// document.addEventListener("DOMContentLoaded", toggleModalWindow);
// //закрытие окна по клику на кнопку закрытия/фон/кнопку Esc
// document
//   .querySelector(".modal-window__close-btn")
//   .addEventListener("click", toggleModalWindow);

// document.querySelector(".overlay").addEventListener("click", toggleModalWindow);

// document.addEventListener("keydown", function (event) {
//   if (
//     event.key == "Escape" &&
//     !document.querySelector(".modal-window").classList.contains(".hidden")
//   ) {
//     toggleModalWindow();
//   }
// });

//JQuery
$(function () {
  function toggleModalWindow() {
    $(".modal-window").toggleClass("hidden");
    $(".overlay").toggleClass("hidden");
  }
  $(document).on("click", ".modal-window__close-btn", toggleModalWindow);
  $(".overlay").on("click", toggleModalWindow);
  $(document).on("keydown", function (event) {
    if (event.key === "Escape" && !$(".modal-window").hasClass("hidden")) {
      toggleModalWindow();
    }
  });
  toggleModalWindow();
});
