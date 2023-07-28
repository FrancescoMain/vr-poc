class Elements {
  html = "";
  getHtml() {
    return this.html;
  }
  addElement(element) {
    this.html += element;
  }
}

export const useElements = new Elements();
