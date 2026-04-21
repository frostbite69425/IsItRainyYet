import getSearchedWeatherData from "../appControllers/getSearchedWeatherData.controller.js";
import weatherDisplay from "../../services/ui services/weatherDisplay.service.js";
import logAlert from "../../services/app services/logAlert.service.js";

const unitSwitcherController = async () => {
  try {
    const select = document.querySelector("select.unit-select");
    select.addEventListener("change", async (e) => {
      const locationValue = select.dataset.locationValue;
      console.log(locationValue);
      e.preventDefault();
      const selectedValue = select.value;
      const loader = document.querySelector("div.loader");
      loader.style.display = "block";
      const weatherDisplayDiv = document.querySelector(
        "div.weather-display-div",
      );
      weatherDisplayDiv.style.display = "none";
      const weatherData = await getSearchedWeatherData(
        locationValue,
        selectedValue,
      );
      if (weatherData == undefined || weatherData >= 400) {
        weatherDisplayDiv.style.display = "none";
        loader.style.display = "none";
        logAlert("Could not reach the servers.");
        return;
      }
      weatherDisplayDiv.style.display = "grid";
      loader.style.display = "none";
      const address = document.querySelector("div.place-name-div");
      address.textContent = `Address: ${locationValue}`;
      weatherDisplay(weatherData);
    });
  } catch (error) {
    console.error(error);
    logAlert("Could not reach the servers.");
  }
};

export default unitSwitcherController;
