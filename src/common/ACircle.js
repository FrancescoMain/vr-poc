export class Acircle {
  attributes = ``;
  children = ``;
  html = `<a-circle ${this.attributes} ><${this.children}/a-circle>`;

  getHtml() {
    return this.html;
  }

  setAttributes(attributes) {
    this.attributes = attributes;
    this.html = `<a-circle ${this.attributes} ><${this.children}/a-circle>`;
  }

  setChildren(children) {
    this.children = children;
    this.html = `<a-circle ${this.attributes} ><${this.children}/a-circle>`;
  }
}
