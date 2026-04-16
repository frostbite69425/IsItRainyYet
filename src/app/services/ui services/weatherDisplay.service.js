import elementFactory from "../../controllers/uiControllers/elementFactory.controller.js";
import weatherCard from "../../components/weatherCard.component.js";
import currentWeatherCard from "../../components/currentWeather.component.js";

const weatherDisplay = (weatherData) => {
  const currentConditions = weatherData.currentConditions; // object
  const weatherWeek = weatherData.days; // array

  const displayDiv = document.querySelector("div.weather-display-div");

  while (displayDiv.firstChild) {
    displayDiv.removeChild(displayDiv.lastChild);
  }

  const currentWeatherConditions = currentWeatherCard(currentConditions);

  const weatherCardHolder = elementFactory(
    "div",
    "weather-card-holder container",
  );

  for (const day of weatherWeek) {
    const weatherCardComponent = weatherCard(day);
    weatherCardHolder.setChildren(weatherCardComponent.domElement);
  }

  displayDiv.append(
    currentWeatherConditions.domElement,
    weatherCardHolder.domElement,
  );
};

export default weatherDisplay;
