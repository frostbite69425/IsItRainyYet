import getGeolocationWeatherData from "../appControllers/getGeolocationWeatherData.controller.js";
import getSearchedWeatherData from "../appControllers/getSearchedWeatherData.controller.js";
import mainPage from "../../services/ui services/mainPage.service.js";

const initModalController = () => {
  const geolocationBtn = document.querySelector("button.geolocation-btn");
  const searchBtn = document.querySelector("button.modal-search-btn");
  const initModal = document.querySelector("dialog.init-modal");
  const searchInput = document.querySelector("input.search-input");

  geolocationBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    initModal.close();
    const weatherData = await getGeolocationWeatherData();
    console.log(weatherData);
    mainPage(weatherData.parsedWeatherData, weatherData.location);
  });

  searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const placeName = searchInput.value;
    initModal.close();
    const weatherData = await getSearchedWeatherData(placeName);
    console.log(weatherData);
    mainPage(weatherData, placeName);
  });
};

export default initModalController;
