const setLocationName = (locationValue) => {
  const select = document.querySelector("select.unit-select");
  select.dataset.locationValue = locationValue;
  const address = document.querySelector("div.place-name-div");
  address.textContent = locationValue;
};

export default setLocationName;
