import getGeolocationWeatherData from "../appControllers/getGeolocationWeatherData.controller.js";
import getSearchedWeatherData from "../appControllers/getSearchedWeatherData.controller.js";
import mainPage from "../../services/ui services/mainPage.service.js";
import logAlertService from "../../services/app services/logAlert.service.js";

const initModalController = () => {
  const geolocationBtn = document.querySelector("button.geolocation-btn");
  const searchBtn = document.querySelector("button.modal-search-btn");
  const initModal = document.querySelector("dialog.init-modal");
  const searchInput = document.querySelector("input.search-input");

  geolocationBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    initModal.close();
    const loader = document.querySelector("div.loader");
    loader.style.display = "block";
    const weatherData = await getGeolocationWeatherData();
    loader.style.display = "none";
    console.log(weatherData);
    mainPage(weatherData.parsedWeatherData, weatherData.location);
  });

  searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const placeName = searchInput.value;
    initModal.close();
    const loader = document.querySelector("div.loader");
    loader.style.display = "block";
    const weatherData = await getSearchedWeatherData(placeName);
    if (weatherData >= 400) {
      loader.style.display = "none";
      logAlertService("Invalid search parameters.");
      mainPage(weatherData, placeName);
      return;
    }
    loader.style.display = "none";
    console.log(weatherData);
    mainPage(weatherData, placeName);
  });
};

export default initModalController;
