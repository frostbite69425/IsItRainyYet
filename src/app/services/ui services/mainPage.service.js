import elementFactory from "../../controllers/uiControllers/elementFactory.controller.js";
import searchLocation from "../../components/userSearchInput.component.js";
import searchNewLocation from "../../controllers/uiControllers/searchNewLocation.controller.js";
import unitSwitcher from "../../components/unitSwitcher.component.js";
import unitSwitcherController from "../../controllers/uiControllers/unitSwitcher.controller.js";
import weatherDisplay from "./weatherDisplay.service.js";

const mainPage = (weatherData, location) => {
  const content = document.querySelector("div.content");

  if (!document.querySelector("input.location-search-input")) {
    const weatherDisplayHolder = elementFactory("div", "weather-display-div");

    const searchBar = searchLocation();

    const unitSwitcherDiv = unitSwitcher(location);

    content.append(
      searchBar.domElement,
      unitSwitcherDiv.domElement,
      weatherDisplayHolder.domElement,
    );
    searchNewLocation();
  } else {
    const address = document.querySelector("div.place-name-div");
    address.textContent = location;
  }

  weatherDisplay(weatherData);
  const select = document.querySelector("select.unit-select");
  select.dataset.locationValue = location;
  console.log(location);
  unitSwitcherController();
};

export default mainPage;
