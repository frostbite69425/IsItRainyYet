import getSearchedWeatherData from "../appControllers/getSearchedWeatherData.controller.js";
import weatherDisplay from "../../services/ui services/weatherDisplay.service.js";

const unitSwitcherController = async () => {
  const select = document.querySelector("select.unit-select");
  select.addEventListener("change", async (e) => {
    const locationValue = select.dataset.locationValue;
    console.log(locationValue);
    e.preventDefault();
    const selectedValue = select.value;
    const weatherData = await getSearchedWeatherData(
      locationValue,
      selectedValue,
    );
    const address = document.querySelector("div.place-name-div");
    address.textContent = locationValue;
    weatherDisplay(weatherData);
  });
};

export default unitSwitcherController;
