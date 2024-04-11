const form = document.querySelector("#form");
const jsonHeading = document.querySelector(".heading");
const formInfo = document.querySelector(".json");
const SERVER_URL = "server.php";

//получаем введенные данные из формы и возвращаем их в json-формате
// function serializeToJSON() {
//     const jsonData = Object.fromEntries(new FormData(form));
//     return JSON.stringify(jsonData);
// }
const jsonData = () => JSON.stringify(Object.fromEntries(new FormData(form)));
//выводим json под формой
function showJson(json) {
  jsonHeading.classList.remove("hidden");
  formInfo.textContent = json;
}

//запрос к серверу
async function sendForm(jsonData) {
  try {
    const urlParams = new URLSearchParams(jsonData);
    const response = await fetch(`${SERVER_URL}?${urlParams}`);
    if (!response.ok) {
      throw new Error("Ошибка при отправке данных на сервер");
    } else {
      alert("Ok"); // Выводим ответ через alert
      console.log(jsonData);
    }
  } catch (error) {
    console.error(error);
    alert("Произошла ошибка: " + error.message);
  }
}

form.addEventListener("submit", async function (evt) {
  evt.preventDefault();
  const jsonDataValue = jsonData();
  showJson(jsonData());
  await sendForm(jsonDataValue);
});
