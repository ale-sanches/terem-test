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

//при открытии страницы открывать модальное окно
//JS

//JQuery
// $(function () {
//   // действия, которые необходимо выполнить после загрузки документа...
// });
