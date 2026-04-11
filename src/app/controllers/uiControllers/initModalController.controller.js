import getGeolocationWeatherData from "../appControllers/getGeolocationWeatherData.controller.js";
import getSearchedWeatherData from "../appControllers/getSearchedWeatherData.controller.js";

const initModalController = () => {
  const geolocationBtn = document.querySelector("button.geolocation-btn");
  const searchBtn = document.querySelector("button.modal-search-btn");
  const initModal = document.querySelector("dialog.init-modal");
  const searchInput = document.querySelector("input.search-input");

  geolocationBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const weatherData = await getGeolocationWeatherData();
    initModal.close();
    console.log(weatherData);
    return weatherData;
  });

  searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const placeName = searchInput.value;
    const weatherData = await getSearchedWeatherData(placeName);
    initModal.close();
    console.log(weatherData);
    return weatherData;
  });
};

export default initModalController;
