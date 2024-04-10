const firstBtn = document.querySelector(".btn-warning");
const secondBtn = document.querySelector(".btn-success");
const modalWindowOverlay = document.querySelector(".modal-window__overlay");
const modalCloseBtn = document.querySelector(".modal-window__close-btn");
const rowOne = document.querySelector(".row-one");

function toggleItem(element) {
  element.classList.toggle("hidden");
}

//по нажатию на "Кнопка 1" скрываем и показываем блок с заголовком
firstBtn.addEventListener("click", function () {
  toggleItem(rowOne);
});

//по нажатию на "Кнопка 2" меняем местами первые два блока второго ряда
secondBtn.addEventListener("click", function () {
  const [firstItem, secondItem] = document.querySelectorAll(
    ".row-two .row__item"
  );
  secondItem.after(firstItem);
});

//закрытие модального окна

function handleModalClick(event) {
  if (event.target === modalWindowOverlay) {
    toggleItem(modalWindowOverlay);
  }
}

function handleEscKey(event) {
  if (
    event.key === "Escape" &&
    !modalWindowOverlay.classList.contains("hidden")
  ) {
    toggleItem(modalWindowOverlay);
  }
}

modalCloseBtn.addEventListener("click", () => {
  toggleItem(modalWindowOverlay);
});
modalWindowOverlay.addEventListener("click", handleModalClick);
document.addEventListener("keydown", handleEscKey);
