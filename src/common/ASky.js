class ASky {
  background = "black";
  html = `<a-sky id="sky" material="opacity: 1" src=${this.background}></a-sky>`;

  getHtml = () => {
    return this.html;
  };

  setBackground(background) {
    this.background = background;
    this.html = `<a-sky id="sky" material="opacity: 1" src=${this.background}></a-sky>`;
  }
}

export const useASky = new ASky();
