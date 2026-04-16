import getSearchedWeatherData from "../appControllers/getSearchedWeatherData.controller.js";
import setLocationName from "../../utils/ui utils/setLocationName.js";
import weatherDisplay from "../../services/ui services/weatherDisplay.service.js";

function searchNewLocation() {
  const searchBtn = document.querySelector("button.app-search-btn");
  const searchInput = document.querySelector("input.location-search-input");

  searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const locationValue = searchInput.value;
    const weatherData = await getSearchedWeatherData(locationValue);
    console.log({ locationValue, weatherData });
    weatherDisplay(weatherData);
    setLocationName(locationValue);
  });
}

export default searchNewLocation;
