import elementFactory from "../../controllers/uiControllers/elementFactory.controller.js";
import searchLocation from "../../components/userSearchInput.component.js";
import searchNewLocation from "../../controllers/uiControllers/searchNewLocation.controller.js";
import unitSwitcher from "../../components/unitSwitcher.component.js";
import unitSwitcherController from "../../controllers/uiControllers/unitSwitcher.controller.js";
import weatherDisplay from "./weatherDisplay.service.js";

import loaderComponent from "../../components/loader.component.js";

const mainPage = (weatherData, location) => {
  const content = document.querySelector("div.content");

  if (!document.querySelector("input.location-search-input")) {
    const weatherDisplayHolder = elementFactory("div", "weather-display-div");

    const searchBar = searchLocation();

    const unitSwitcherDiv = unitSwitcher(location);

    const loader = loaderComponent();

    content.append(
      searchBar.domElement,
      unitSwitcherDiv.domElement,
      weatherDisplayHolder.domElement,
      loader.domElement,
    );
    searchNewLocation();
  } else {
    const address = document.querySelector("div.place-name-div");
    address.textContent = location;
  }
  const select = document.querySelector("select.unit-select");
  select.dataset.locationValue = location;
  unitSwitcherController();

  if (weatherData >= 400) {
    return;
  }

  weatherDisplay(weatherData);
};

export default mainPage;
