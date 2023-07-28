export class APlane {
  attributes = ``;

  html = ` <a-plane ${this.attributes}></a-plane>`;

  getHtml = () => {
    return this.html;
  };

  setAttributes(attributes) {
    this.attributes = attributes;
    this.html = ` <a-plane ${this.attributes}></a-plane>`;
  }
}

export const useAPlane = new APlane();
