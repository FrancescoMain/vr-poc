AFRAME.registerComponent("hoverable", {
  init: function () {
    this.el.addEventListener("mouseenter", function () {
      var paper = document.createElement("a-entity");
      var sceneEl = document.querySelector("#cyber");
      var entityEl = document.createElement("a-entity");
      paper.setAttribute("position", "0 4 -3");
      paper.setAttribute("scale", "5 5 5");
      paper.setAttribute(
        "geometry",
        "primitive: box; width: 1; height: 1; depth: 0.1"
      );
      paper.setAttribute("material", "color: #00aaff");
      paper.appendChild(entityEl);
      entityEl.setAttribute(
        "text",
        "value:Questa e' un auto proveniente dall'universo cyberpunk; color: white; align: center; wrapCount: 10;"
      );
      paper.setAttribute("id", "cyberText"); // Imposta l'ID in lettere minuscole
      entityEl.setAttribute("scale", "0.5 0.5 0");
      entityEl.setAttribute("position", "0 0 0.1");

      sceneEl.appendChild(paper);
    });
    this.el.addEventListener("mouseleave", function () {
      var sceneEl = document.querySelector("#cyber");
      var paper = document.querySelector("#cyberText"); // Utilizza lo stesso ID definito sopra

      sceneEl.removeChild(paper); // Modifica il metodo da "parentNode.nodeChild" a "removeChild"
    });
    this.el.addEventListener("click", function () {
      console.log("fun");
    });
  },
});

AFRAME.registerComponent("text2", {
  init: function () {
    this.el.addEventListener("mouseenter", function () {
      var paper = document.createElement("a-entity");
      var sceneEl = document.querySelector("#porche");
      var entityEl = document.createElement("a-entity");
      paper.setAttribute("position", "0 2 -3");
      paper.setAttribute("scale", "3 3 3");
      paper.setAttribute(
        "geometry",
        "primitive: box; width: 1; height: 1; depth: 0.1"
      );
      paper.setAttribute("material", "color: #00aaff");
      paper.appendChild(entityEl);
      entityEl.setAttribute(
        "text",
        "value:Questa e' una porche; color: white; align: center; wrapCount: 10;"
      );
      paper.setAttribute("id", "cyberText"); // Imposta l'ID in lettere minuscole
      entityEl.setAttribute("scale", "0.5 0.5 0");
      entityEl.setAttribute("position", "0 0 0.1");

      sceneEl.appendChild(paper);
    });
    this.el.addEventListener("mouseleave", function () {
      var sceneEl = document.querySelector("#porche");
      var paper = document.querySelector("#cyberText"); // Utilizza lo stesso ID definito sopra

      sceneEl.removeChild(paper); // Modifica il metodo da "parentNode.nodeChild" a "removeChild"
    });
  },
});

AFRAME.registerComponent("text3", {
  init: function () {
    this.el.addEventListener("mouseenter", function () {
      var paper = document.createElement("a-entity");
      var sceneEl = document.querySelector("#run");
      var entityEl = document.createElement("a-entity");
      paper.setAttribute("position", "0 1 -3");
      paper.setAttribute("scale", "2 2 2");
      paper.setAttribute(
        "geometry",
        "primitive: box; width: 1; height: 1; depth: 0.1"
      );
      paper.setAttribute("material", "color: #00aaff");
      paper.appendChild(entityEl);
      entityEl.setAttribute(
        "text",
        "value:Questa e' una macchina da corsa; color: white; align: center; wrapCount: 10;"
      );
      paper.setAttribute("id", "cyberText"); // Imposta l'ID in lettere minuscole
      entityEl.setAttribute("scale", "0.5 0.5 0");
      entityEl.setAttribute("position", "0 0 0.1");

      sceneEl.appendChild(paper);
    });
    this.el.addEventListener("mouseleave", function () {
      var sceneEl = document.querySelector("#run");
      var paper = document.querySelector("#cyberText"); // Utilizza lo stesso ID definito sopra

      sceneEl.removeChild(paper); // Modifica il metodo da "parentNode.nodeChild" a "removeChild"
    });
  },
});

AFRAME.registerComponent("step-hover", {
  init: function () {
    // Utilizziamo una funzione freccia qui per mantenere il contesto corretto
    this.el.addEventListener("mouseenter", () => {
      this.el.setAttribute("color", "lightgrey");
    });

    // Puoi anche utilizzare una funzione freccia qui
    this.el.addEventListener("mouseleave", () => {
      this.el.setAttribute("color", "white");
    });
  },
});

AFRAME.registerComponent("change-postion", {
  init: function () {
    this.el.addEventListener("click", () => {
      const position = this.el.getAttribute("position");

      // Imposta l'altezza costante a 1.6
      const height = 1.6;

      // Crea un nuovo oggetto di posizione con l'altezza costante
      const newPosition = { x: position.x, y: height, z: position.z };

      const cameraElement = document.getElementById("camera");

      // Controlla che l'elemento con ID "camera" esista prima di impostare la posizione
      if (cameraElement) {
        cameraElement.setAttribute("position", newPosition);
      }
    });
  },
});
