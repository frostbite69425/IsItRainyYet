import getSearchedWeatherData from "../appControllers/getSearchedWeatherData.controller.js";
import mainPage from "../../services/ui services/mainPage.service.js";

const unitSwitcherController = (location) => {
  const select = document.querySelector("select.unit-select");

  select.addEventListener("change", async (e) => {
    e.preventDefault();
    const selectedValue = select.value;
    const weatherData = await getSearchedWeatherData(location, selectedValue);
    mainPage(weatherData, location);
  });
};

export default unitSwitcherController;
