export class Pannel {
  attributes = ``;
  html = `<a-entity position="0 0.1 0.01" id="overPannel" visible="false" scale="0 0 0">
            <a-triangle color="black"  rotation="0 0 -180" scale="0.1 0.1 0.1" -1 0"></a-triangle>
            <a-box color="black" position="0 0.3 0" align="center" scale="0.5 0.5 0.01" -1 0">
              <a-text wrapCount="0" wrap-pixels="500" width="1" color="white" position="-0.5 0 1" value="Questo è un testo di descrizione molto lunga"></a-text>
              <a-text scopri wrapCount="0" wrap-pixels="500" width="1" color="white" position="-0.5 -0.3 1" value="Scopri altro"></a-text>
            </a-box>
            </a-triangle>

          </a-entity>`;

  getHtml() {
    return this.html;
  }

  setAttributes(attributes) {
    this.attributes = attributes;
    this.html = `<a-circle ${this.attributes} ></a-circle>`;
  }
}
