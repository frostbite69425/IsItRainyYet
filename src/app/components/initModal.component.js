import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";

function makeInitModal() {
  const modal = elementFactory("dialog", "init-modal modal");
  const form = elementFactory("form", "geolocation-method-form form");
  form.domElement.setAttribute("id", "geolocation-method-form");

  const heading = elementFactory("h2", "heading");
  heading.insertText("Use geolocation or search for a place yourself!");

  const geolocationBtn = elementFactory("button", "geolocation-btn button");
  geolocationBtn.domElement.setAttribute("type", "button");
  geolocationBtn.insertText("Click to allow geolocation services");

  const smallHeading = elementFactory("p", "");
  smallHeading.insertText("OR");

  const searchLabel = elementFactory("label", "search-label label");
  searchLabel.domElement.setAttribute("for", "search-input");

  const searchPara = elementFactory("p", "search-para");
  searchPara.insertText("Search for a specific place:");

  const searchInput = elementFactory("input", "search-input");
  searchInput.domElement.setAttribute("type", "search");
  searchInput.domElement.setAttribute("name", "placeName");
  searchInput.domElement.setAttribute("id", "search-input");
  searchInput.domElement.setAttribute("placeholder", "London");

  const searchBtn = elementFactory("button", "modal-search-btn");
  searchBtn.domElement.setAttribute("type", "submit");
  searchBtn.insertText("search");

  searchLabel.setChildren(
    searchPara.domElement,
    searchInput.domElement,
    searchBtn.domElement,
  );

  form.setChildren(
    heading.domElement,
    geolocationBtn.domElement,
    smallHeading.domElement,
    searchLabel.domElement,
  );

  modal.setChildren(form.domElement);
  return modal;
}

export default makeInitModal;
