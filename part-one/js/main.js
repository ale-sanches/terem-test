const firstBtn = document.querySelector(".btn-warning");
const secondBtn = document.querySelector(".btn-success");
const overlay = document.querySelector(".overlay")
const rowThree = document.querySelector(".row-three");
const rowOne = document.querySelector(".row-one");
const modalCloseBtn = document.querySelector(".modal-window__close-btn");


rowThree.addEventListener("click", function (event) {
    // Если нажата "Кнопка 1"
    if (event.target === firstBtn) {
        toggleItem(rowOne);
    }
    // Если нажата "Кнопка 2"
    if (event.target === secondBtn) {
        const [firstItem, secondItem] = document.querySelectorAll(".row-two .row__item");
        secondItem.after(firstItem);
    }
});

//закрытие модального окна
document.addEventListener("click", closeModal);
document.addEventListener("keydown", closeModal);


function closeModal(event) {
    if ((event.type === "click" && (event.target === modalCloseBtn || event.target === overlay)) ||
        (event.type === "keydown" && event.key === "Escape" && !overlay.classList.contains("hidden"))) {
        toggleItem(overlay);
    }
}


function toggleItem(element) {
    element.classList.toggle("hidden");
}