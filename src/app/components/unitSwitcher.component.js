import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";

const unitSwitcher = (location) => {
  const mainDiv = elementFactory("div", "unit-main-div");
  const placeDiv = elementFactory("div", "place-name-div");
  placeDiv.insertText(`Address: ${location}`);

  const unitSelect = elementFactory("select", "unit-select select");
  unitSelect.domElement.setAttribute("id", "unit-select");

  const optionMetric = elementFactory("option", "metric option");
  optionMetric.domElement.setAttribute("value", "metric");
  optionMetric.insertText("Metric (°C, km)");

  const optionUS = elementFactory("option", "US option");
  optionUS.domElement.setAttribute("value", "us");
  optionUS.insertText("US (°F, miles)");

  unitSelect.setChildren(optionMetric.domElement, optionUS.domElement);
  mainDiv.setChildren(placeDiv.domElement, unitSelect.domElement);

  return mainDiv;
};

export default unitSwitcher;
