const firstBtn = document.querySelector(".btn-warning");
const secondBtn = document.querySelector(".btn-success");
const overlay = document.querySelector(".overlay")
const rowThree = document.querySelector(".row-three");
const rowOne = document.querySelector(".row-one");
const modalCloseBtn = document.querySelector(".modal-window__close-btn");


rowThree.addEventListener("click", function (event) {
    // Проверяем, была ли нажата "Кнопка 1"
    if (event.target === firstBtn) {
        toggleItem(rowOne);
    }
    // Проверяем, была ли нажата "Кнопка 2"
    else if (event.target === secondBtn) {
        const [firstItem, secondItem] = document.querySelectorAll(".row-two .row__item");
        secondItem.after(firstItem);
    }
});

//закрытие модального окна
document.addEventListener("click", function (event) {
    if (event.target === modalCloseBtn) {
        toggleItem(overlay);
    } else if (event.target === overlay) {
        toggleItem(overlay);
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !overlay.classList.contains("hidden")) {
        toggleItem(overlay);
    }
});

function toggleItem(element) {
    element.classList.toggle("hidden");
}
