import { useAFrame } from "./common/AFrame";

export const app = () => {
  return `<div class="vr-cont">
            ${useAFrame.getHtml()}
            <div id="drawer"></div>
          </div>`;
};
