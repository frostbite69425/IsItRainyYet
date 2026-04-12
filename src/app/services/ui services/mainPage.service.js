import elementFactory from "../../controllers/uiControllers/elementFactory.controller.js";
import weatherCard from "../../components/weatherCard.component.js";

const mainPage = (weatherData) => {
  const currentConditions = weatherData.currentConditions; // object
  const weatherWeek = weatherData.days; // array

  const content = document.querySelector("div.content");

  const weatherCardHolder = elementFactory(
    "div",
    "weather-card-holder container",
  );

  for (const day of weatherWeek) {
    const weatherCardComponent = weatherCard(day);
    weatherCardHolder.setChildren(weatherCardComponent.domElement);
  }

  content.appendChild(weatherCardHolder.domElement);
};

export default mainPage;
