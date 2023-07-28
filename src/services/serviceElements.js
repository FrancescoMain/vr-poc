import { useElements } from "../common/Elements";
import { useASky } from "../common/ASky";
import { useAssets } from "../common/Asstes";
import { attributeSettings } from "../settings/attributeSettings";
import { useAPlane } from "../common/APlane";
import { useACamera } from "../common/ACamera";
import { elements } from "../settings/elementSettings";
export const useServiceElements = () => {
  attributeSettings();
  useElements.addElement(useAssets.getHtml());
  useElements.addElement(useASky.getHtml());
  useElements.addElement(useAPlane.getHtml());
  useElements.addElement(useACamera.getHtml());
  useElements.addElement(elements);
};
