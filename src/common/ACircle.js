export class Acircle {
  attributes = ``;
  html = `<a-circle ${this.attributes} ></a-circle>`;

  getHtml() {
    return this.html;
  }

  setAttributes(attributes) {
    this.attributes = attributes;
    this.html = `<a-circle ${this.attributes} ></a-circle>`;
  }
}
