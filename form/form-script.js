const form = document.querySelector("#form");
const serverUrl = "server.php";

form.addEventListener("submit", async function (evt) {
    evt.preventDefault();

    const json = serializeFormToJSON(form);
    displayFormInfo(json);

    try {
        const responseBody = await performGetRequest(serverUrl, json);
        alert("Тут могло быть ваше тело ответа: {" + responseBody + "}");
    } catch (error) {
        console.error(error);
    }
});

/**
 * Сериализует данные переданной формы в JSON
 * @param form форма, данные который нужно собрать в JSON
 * @returns {string} данные формы, сериализованные в JSON
 */
function serializeFormToJSON(form) {
    return JSON.stringify(Object.fromEntries(new FormData(form)));
}

/**
 * Отображает переданный JSON в блок вывода сериализованной формы
 * @param json сериализованные данные для отображения
 */
function displayFormInfo(json) {
    document.querySelector(".heading").classList.remove("hidden");
    document.querySelector(".json").textContent = json;
}

/**
 * Выполняет GET запрос на получение информации по собранным данным с формы
 * @param serverURL url сервера для отправки запроса
 * @param jsonParam параметры запроса
 * @returns {Promise<string>} потенциальное тело ответа от сервера
 */

async function performGetRequest(serverURL, jsonParam) {
    let urlParams = new URLSearchParams(jsonParam);
    const resp = await fetch(`${serverURL}?${urlParams}`);
    if (!resp.ok) {
        throw new Error(`"Якая оказия приключилась, ошибка при запросе: ${resp.status}"`);
    }
    return resp.text();
}