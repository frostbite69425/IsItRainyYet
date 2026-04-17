import elementFactory from "../controllers/uiControllers/elementFactory.controller.js";

const loader = () => {
  const wrapper = elementFactory("div", "wrapper loader");
  for (let i = 0; i < 3; i++) {
    const circle = elementFactory("div", "circle");
    wrapper.setChildren(circle.domElement);
  }
  for (let i = 0; i < 3; i++) {
    const shadow = elementFactory("div", "circle");
    wrapper.setChildren(shadow.domElement);
  }

  return wrapper;
};

export default loader;
