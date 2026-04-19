import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";

function searchLocation() {
  const searchDiv = elementFactory("div", "search-div");

  const searchLabel = elementFactory("label", "search-label label");

  const searchLabelText = elementFactory("p", "search-text text");
  searchLabelText.insertText("Search for a specific place:");

  const searchInput = elementFactory("input", "location-search-input");
  searchInput.domElement.setAttribute("type", "search");

  const searchBtn = elementFactory("button", "app-search-btn");
  searchBtn.domElement.setAttribute("type", "button");
  searchBtn.insertText("search");

  searchLabel.setChildren(
    searchLabelText.domElement,
    searchInput.domElement,
    searchBtn.domElement,
  );

  searchDiv.setChildren(searchLabel.domElement);

  return searchDiv;
}

export default searchLocation;
