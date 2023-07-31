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
      var paper = document.querySelector("#cyberText"); //  Utilizza lo stesso ID definito sopra

      sceneEl.removeChild(paper); //Modifica il metodo da "parentNode.nodeChild" a "removeChild"
    });
    this.el.addEventListener("click", function () {
      var drawer = document.querySelector("#drawer");
      if (drawer.style.width === "0%") {
        drawer.style.width = "20%";
      } else {
        drawer.style.width = "0%";
      }
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
      var paper = document.querySelector("#cyberText"); //Utilizza lo stesso ID definito sopra

      sceneEl.removeChild(paper); // Modifica il metodo da "parentNode.nodeChild" a "removeChild"
    });
    this.el.addEventListener("click", function () {
      var drawer = document.querySelector("#drawer");
      if (drawer.style.width === "0%") {
        drawer.style.width = "20%";
      } else {
        drawer.style.width = "0%";
      }
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
      paper.setAttribute("id", "cyberText"); //  Imposta l'ID in lettere minuscole
      entityEl.setAttribute("scale", "0.5 0.5 0");
      entityEl.setAttribute("position", "0 0 0.1");

      sceneEl.appendChild(paper);
    });
    this.el.addEventListener("mouseleave", function () {
      var sceneEl = document.querySelector("#run");
      var paper = document.querySelector("#cyberText"); //  Utilizza lo stesso ID definito sopra

      sceneEl.removeChild(paper); //Modifica il metodo da "parentNode.nodeChild" a "removeChild"
    });
    this.el.addEventListener("click", function () {
      var drawer = document.querySelector("#drawer");
      if (drawer.style.width === "0%") {
        drawer.style.width = "20%";
      } else {
        drawer.style.width = "0%";
      }
    });
  },
});

AFRAME.registerComponent("step-hover", {
  init: function () {
    // Utilizziamo una funzione freccia qui per mantenere il contesto corretto
    this.el.addEventListener("mouseenter", () => {
      this.el.setAttribute("color", "lightgrey");
    });

    //  Puoi anche utilizzare una funzione freccia qui
    this.el.addEventListener("mouseleave", () => {
      this.el.setAttribute("color", "white");
    });
  },
});

AFRAME.registerComponent("change-position", {
  init: function () {
    var data = this.data;
    this.el.addEventListener("click", () => {
      var skyEl = document.querySelector("#sky");
      const position = this.el.getAttribute("position");

      // Imposta l'altezza costante a 1.6
      const height = 1.6;

      // Crea un nuovo oggetto di posizione con l'altezza costante
      const newPosition = { x: position.x, y: height, z: position.z };

      const cameraElement = document.getElementById("camera");

      // Aggiungi l'animazione alla sfera del cielo (a-sky)
      cameraElement.setAttribute("animation", {
        property: "position",
        to: newPosition,
        dur: 1000, // Durata in millisecondi della transizione (puoi regolare il valore)
      });

      // Cambia il background dopo la transizione
      skyEl.setAttribute("src", data);
    });
  },
});

AFRAME.registerComponent("test", {
  init: function () {
    const childElement = this.el.childNodes[1];
    this.el.addEventListener("mouseenter", () => {
      this.el.setAttribute("color", "grey");
      childElement.setAttribute("visible", "true");
      childElement.setAttribute("scale", "1 1 1");
    });

    this.el.addEventListener("mouseleave", () => {
      this.el.setAttribute("color", "black");
      childElement.setAttribute("scale", "0 0 0");
    });
  },
});

AFRAME.registerComponent("scopri", {
  init: function () {
    // Utilizziamo una funzione freccia qui per mantenere il contesto corretto
    this.el.addEventListener("mouseenter", () => {
      this.el.setAttribute("color", "red");
    });

    //  Puoi anche utilizzare una funzione freccia qui
    this.el.addEventListener("mouseleave", () => {
      this.el.setAttribute("color", "white");
    });

    this.el.addEventListener("click", () => {
      var drawer = document.querySelector("#drawer");
      const gdad = this.el.parentElement; // Ottieni l'elemento genitore
      const dad = gdad.parentElement; // Ottieni l'elemento genitore
      const parentElement = dad.parentElement; // Ottieni l'elemento genitore
      const position = parentElement.getAttribute("position");
      const newPosition = { x: position.x, y: position.y, z: position.z + 2.5 };
      const cameraElement = document.getElementById("camera");

      // Aggiungi un ascoltatore di eventi per l'animazione completata
      const animationEndListener = () => {
        cameraElement.removeEventListener(
          "animationcomplete",
          animationEndListener
        );
        cameraElement.removeAttribute("animation");
      };

      // Controlla se l'animazione è già in corso, rimuovi l'evento "animationcomplete" e resetta la posizione
      if (cameraElement.getAttribute("animation")) {
        cameraElement.removeEventListener(
          "animationcomplete",
          animationEndListener
        );
        cameraElement.removeAttribute("animation");
      }

      // Aggiungi un ascoltatore di eventi per l'animazione completata
      cameraElement.addEventListener("animationcomplete", animationEndListener);

      // Imposta l'animazione della posizione
      cameraElement.setAttribute("animation", {
        property: "position",
        to: newPosition,
        dur: 1000, // Durata in millisecondi della transizione (puoi regolare il valore)
      });

      if (drawer.style.width === "20%") {
        drawer.style.width = "0%";
        return;
      }

      drawer.style.width = "20%";
    });
  },
});
