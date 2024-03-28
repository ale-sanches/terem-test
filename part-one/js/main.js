document.addEventListener("DOMContentLoaded", function () {
  const firstBtn = document.querySelector(".btn-warning");
  const secondBtn = document.querySelector(".btn-success");
  const modalWindow = document.querySelector(".modal-window");
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

  //действия с модальным окном

  function closeModalWindow() {
    toggleItem(modalWindow);
  }

  function handleModalClick(event) {
    if (event.target === modalWindow) {
      closeModalWindow();
    }
  }

  function handleEscKey(event) {
    if (event.key === "Escape" && !modalWindow.classList.contains("hidden")) {
      closeModalWindow();
    }
  }

  modalCloseBtn.addEventListener("click", closeModalWindow);
  modalWindow.addEventListener("click", handleModalClick);
  document.addEventListener("keydown", handleEscKey);
});
