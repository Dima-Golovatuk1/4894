import { getWeather } from '../../api/get-weather.js';

const form = document.querySelector('#weather-form');
const resultContainer = document.querySelector('#weather-result');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const city = event.target.elements.city.value.trim();

    if (!city) return;

    resultContainer.innerHTML = '<p>Завантаження...</p>';

    try {
        const data = await getWeather(city);
        renderWeather(data);
    } catch (error) {
        resultContainer.innerHTML = `<p style="color: red;">Помилка: ${error.message}</p>`;
    }
});

function renderWeather(data) {
    resultContainer.innerHTML = `
        <div class="weather-card">
            <h2>${data.name}</h2>
            <p>Температура: ${data.main.temp}°C</p>
            <p>Вологість: ${data.main.humidity}%</p>
            <p>Опис: ${data.weather[0].description}</p>
        </div>
    `;
}