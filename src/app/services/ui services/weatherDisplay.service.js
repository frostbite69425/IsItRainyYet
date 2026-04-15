import elementFactory from "../../controllers/uiControllers/elementFactory.controller.js";
import weatherCard from "../../components/weatherCard.component.js";
import currentWeatherCard from "../../components/currentWeather.component.js";
import searchLocation from "../../components/userSearchInput.component.js";
import searchNewLocation from "../../controllers/uiControllers/searchNewLocation.controller.js";
import unitSwitcher from "../../components/unitSwitcher.component.js";
import unitSwitcherController from "../../controllers/uiControllers/unitSwitcher.controller.js";

const weatherDisplay = (weatherData, location) => {
  const currentConditions = weatherData.currentConditions; // object
  const weatherWeek = weatherData.days; // array
};
