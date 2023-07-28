import { useElements } from "./Elements";
import { useServiceElements } from "../services/serviceElements";

useServiceElements();
class AFrame {
  html = `<a-scene embedded>${useElements.getHtml()}</a-scene>`;

  getHtml = () => {
    return this.html;
  };
}

export const useAFrame = new AFrame();
