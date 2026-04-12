import makeInitModal from "../../components/initModal.component.js";
import initModalController from "../../controllers/uiControllers/initModalController.controller.js";
import mainPage from "./mainPage.service.js";

const initPage = () => {
  const content = document.querySelector("div.content");

  const initModal = makeInitModal();
  content.appendChild(initModal.domElement);

  initModal.domElement.showModal();

  initModalController();
};

export default initPage;
