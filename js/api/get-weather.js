export async function getWeather(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cfc0c26e1ed4662fc1b14dcfec721388&units=metric`,
    );
    const data = await response.json();
    console.log(data.main);
    return data;
}
