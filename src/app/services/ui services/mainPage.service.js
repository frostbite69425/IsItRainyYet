import elementFactory from "../../controllers/uiControllers/elementFactory.controller.js";
import weatherCard from "../../components/weatherCard.component.js";
import currentWeatherCard from "../../components/currentWeather.component.js";
import searchLocation from "../../components/userSearchInput.component.js";
import searchNewLocation from "../../controllers/uiControllers/searchNewLocation.controller.js";
import unitSwitcher from "../../components/unitSwitcher.component.js";
import unitSwitcherController from "../../controllers/uiControllers/unitSwitcher.controller.js";

const mainPage = (weatherData, location) => {
  const currentConditions = weatherData.currentConditions; // object
  const weatherWeek = weatherData.days; // array

  const content = document.querySelector("div.content");

  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }

  const searchBar = searchLocation();

  const unitSwitcherDiv = unitSwitcher(location);

  const currentWeatherConditions = currentWeatherCard(currentConditions);

  const weatherCardHolder = elementFactory(
    "div",
    "weather-card-holder container",
  );

  for (const day of weatherWeek) {
    const weatherCardComponent = weatherCard(day);
    weatherCardHolder.setChildren(weatherCardComponent.domElement);
  }

  content.append(
    searchBar.domElement,
    unitSwitcherDiv.domElement,
    currentWeatherConditions.domElement,
    weatherCardHolder.domElement,
  );

  searchNewLocation();
  unitSwitcherController(location);
};

export default mainPage;
