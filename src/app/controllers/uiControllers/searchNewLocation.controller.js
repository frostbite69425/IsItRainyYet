import getSearchedWeatherData from "../appControllers/getSearchedWeatherData.controller.js";
import setLocationName from "../../utils/ui utils/setLocationName.js";
import weatherDisplay from "../../services/ui services/weatherDisplay.service.js";
import logAlertService from "../../services/app services/logAlert.service.js";

function searchNewLocation() {
  const searchBtn = document.querySelector("button.app-search-btn");
  const searchInput = document.querySelector("input.location-search-input");

  searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const locationValue = searchInput.value;
    const loader = document.querySelector("div.loader");
    loader.style.display = "block";
    const weatherDisplayDiv = document.querySelector("div.weather-display-div");
    weatherDisplayDiv.style.display = "none";
    const weatherData = await getSearchedWeatherData(locationValue);
    if (weatherData >= 400) {
      loader.style.display = "none";
      logAlertService("Invalid search parameters.");
      return;
    }
    weatherDisplayDiv.style.display = "none";
    weatherDisplayDiv.style.display = "block";
    loader.style.display = "none";
    console.log({ locationValue, weatherData });
    weatherDisplay(weatherData);
    setLocationName(locationValue);
  });
}

export default searchNewLocation;
