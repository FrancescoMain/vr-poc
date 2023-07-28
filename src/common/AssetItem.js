export class AssetImg {
  attributes = ``;
  html = `<img  ${this.attributes}></img>`;

  setAttributes(attributes) {
    this.attributes = attributes;
    this.html = `<img  ${this.attributes}></img>`;
  }

  getHtml() {
    return this.html;
  }
}
