document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("#form");
    const jsonHeading = document.querySelector(".heading");
    const formInfo = document.querySelector(".json");

//получаем введенные данные из формы и возвращаем их в json-формате
    function makeJsonStructure() {
        const jsonData = Object.fromEntries(new FormData(form));
        return JSON.stringify(jsonData);
    }
//выводим json под формой
    function showJson(json) {
        jsonHeading.classList.remove("hidden");
        formInfo.textContent = json;
    }
//запрос к серверу
    async function getResponse() {
        try {
            const response = await fetch("server.php?");

            if (response.ok) {
                alert("Связь с сервером есть");
            } else {
                alert("Ошибка при отправке: " + response.statusText);
            }
        } catch (error) {
            alert("Ошибка при выполнении запроса: " + error.message);
        }
    }

    //действия при отправке формы
    form.addEventListener("submit", async function (evt) {
        evt.preventDefault();
        const json = makeJsonStructure();
        showJson(json);
        await getResponse();
    });

})

