const apiKey = "cedbce4059e0eae5affc580c6c2697ba";

//Weather charging function

async function getWeather() {
  const city = document.getElementById("city").value;
  const weatherInfo = document.getAnimations("weatherInfo");

  if (city === "") {
    weatherInfo.innerHTML = "Please, enter the name of the city.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      weatherInfo.innerHTML = "City not found.";
    } else {
      displayWeather(data);
    }
  } catch (error) {
    weatherInfo.innerHTML = "Error when searching for weather information.";
  }
}

//Function to display weather data

function displayWeather(data) {
  const weatherInfo = document.getElementById("weatherInfo");

  const { name } = data;
  const { description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;

  weatherInfo.innerHTML = `
    <h2>${name}</h2>
    <p>Temperatur: ${temp}C</p>
    <p>Condictions: ${description}</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind: ${speed} km/h</p>`;
}
