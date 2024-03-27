document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const jsonHeading = document.querySelector(".heading");
    const formInfo = document.querySelector(".json");

    function makeJson() {
        const jsonData = {};

        const formData = new FormData(form);
        const selectElements = form.querySelectorAll('select');
        selectElements.forEach(select => {
            const fieldName = select.getAttribute('name');
            jsonData[fieldName] = formData.get(fieldName);
        })

        jsonData["firstName"] = formData.get("firstName") || null;
        jsonData["lastName"] = formData.get("lastName") || null;

        return JSON.stringify(jsonData);
    }

    function showJson(json) {
        jsonHeading.classList.remove("hidden");
        formInfo.textContent = json;
    }

    async function getResponse() {
        try {
            const response = await fetch("server.php?", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            if (response.ok) {
                alert("Связь с сервером есть");
            } else {
                alert("Ошибка при отправке: " + response.statusText);
            }
        } catch (error) {
            alert("Ошибка при выполнении запроса: " + error.message);
        }
    }


    form.addEventListener("submit", async function (evt) {
        evt.preventDefault();
        const json = makeJson();
        showJson(json);
        await getResponse();
    });

})

