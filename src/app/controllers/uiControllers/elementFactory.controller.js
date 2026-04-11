import setParentAndChild from "../../utils/ui utils/appendChildren.js";
import insertTextIntoElement from "../../utils/ui utils/insertTextIntoElement.js";
import makeElementWithClass from "../../utils/ui utils/makeElementWithClass.js";

function elementFactory(elementType, className) {
  const domElement = makeElementWithClass(elementType, className);

  function insertText(text) {
    insertTextIntoElement(domElement, text);
  }

  function setChildren(...children) {
    setParentAndChild(domElement, children);
  }

  return { domElement, insertText, setChildren };
}

export default elementFactory;
