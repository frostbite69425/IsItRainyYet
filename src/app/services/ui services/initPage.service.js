import makeInitModal from "../../components/initModal.component.js";
import initModalController from "../../controllers/uiControllers/initModalController.controller.js";
import loader from "../../components/loader.component.js";

const initPage = () => {
  const content = document.querySelector("div.content");

  const initModal = makeInitModal();
  content.appendChild(initModal.domElement);

  const loaderComponent = loader();
  content.appendChild(loaderComponent.domElement);

  initModal.domElement.showModal();

  initModalController();
};

export default initPage;
