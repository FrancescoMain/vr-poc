import { Acircle } from "../common/ACircle";
import { APlane } from "../common/APlane";
import { steps } from "../data/steps";

var elementsList;

const newPlane = new APlane();
newPlane.setAttributes(
  `id="cyber" hoverable width="2" height="2" position="0 0.1 -5" color="white"`
);
elementsList += newPlane.getHtml();

const newPlane2 = new APlane();
newPlane2.setAttributes(
  `id="porche" text2 width="2" height="2" position="-3 0.1 -5" color="white"`
);
elementsList += newPlane2.getHtml();

const newPlane3 = new APlane();
newPlane3.setAttributes(
  `id="run" text3 width="2" height="2" position="3 0.1 -5" color="white"`
);
elementsList += newPlane3.getHtml();

steps.forEach((step) => {
  const circle = new Acircle();
  circle.setAttributes(
    `id="${step.id}" step-hover change-position color="white" radius="0.1" scale="2 2 10" rotation="-90 0 0" position="${step.position}" `
  );
  elementsList += circle.getHtml();
});

export const elements = elementsList;
