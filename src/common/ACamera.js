class ACamera {
  html = ` <a-camera
          id="camera"
          look-controls
          position="20 20 60"
          animation="property: position; to: 0 1.6 -0; dur: 3000; easing: linear;">
          <a-cursor color="red" scale="0.5 0.5"></a-cursor>
        </a-camera>`;

  getHtml = () => {
    return this.html;
  };
}

export const useACamera = new ACamera();
