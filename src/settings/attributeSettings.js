import { useAPlane } from "../common/APlane";
import { useASky } from "../common/ASky";

export const attributeSettings = () => {
  useASky.setBackground("#background");
  useAPlane.setAttributes(
    `rotation="-90 0 0" width="20" height="20" repeat="10 10" color="grey"`
  );
};
