import makeInitModal from "../../components/initModal.component.js";
import initModalController from "../../controllers/uiControllers/initModalController.controller.js";

const initPage = () => {
  const content = document.querySelector("div.content");

  const initModal = makeInitModal();
  content.appendChild(initModal.domElement);

  initModal.domElement.showModal();
  const weatherData = initModalController();
};

export default initPage;
