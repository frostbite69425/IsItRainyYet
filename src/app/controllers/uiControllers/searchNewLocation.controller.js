import getSearchedWeatherData from "../appControllers/getSearchedWeatherData.controller.js";
import mainPage from "../../services/ui services/mainPage.service.js";

function searchNewLocation() {
  const searchBtn = document.querySelector("button.app-search-btn");
  const searchInput = document.querySelector("input.location-search-input");

  searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const locationValue = searchInput.value;
    const weatherData = await getSearchedWeatherData(locationValue);
    mainPage(weatherData, locationValue);
  });
}

export default searchNewLocation;
