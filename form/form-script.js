document.addEventListener("DOMContentLoaded", function () {
    const formElements = document.querySelectorAll(
        "form input, form select, .form-select, textarea"
    );

    function validateForm() {
        let isValid = true;
        formElements.forEach(function (element) {
            if (element.value === "") {
                showErrorMessage(element);
                isValid = false;
            } else {
                removeErrorMessage(element);
            }
        });
        return isValid;
    }

    function showErrorMessage(element) {
        if (!element.parentNode.querySelector(".error-message")) {
            const errorMessage = document.createElement("p");
            errorMessage.innerHTML = "Вы ничего не ввели";
            errorMessage.style.color = "red";
            errorMessage.classList.add("error-message");
            element.after(errorMessage);
        }
    }

    function removeErrorMessage(element) {
        if (element.parentNode.querySelector(".error-message")) {
            element.parentNode.querySelector(".error-message").remove();
        }
    }

    formElements.forEach(function (input) {
        input.addEventListener("input", function () {
            removeErrorMessage(input);
        });
    });
    //действия при нажатии кнопки
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const formData = {};
        formElements.forEach(function (element) {
            if (element.name) {
                formData[element.name] = element.value;
            }
        });

        if (validateForm()) {
            const jsonHeading = document.querySelector(".heading");
            jsonHeading.classList.remove("hidden");
            const jsonData = JSON.stringify(formData);
            const formInfo = document.querySelector(".json");
            formInfo.textContent = jsonData;

            //запрос на сервер
           
            let xhr = new XMLHttpRequest();
            let url = "server.php";
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        alert("Получил данные");
                    } else {
                        alert("Сервер недоступен");
                    }
                }
            };
            xhr.send();
        }
    });
});
