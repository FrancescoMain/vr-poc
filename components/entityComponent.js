const steps = [
  {
    id: "1",
    position: "3 0.1 -3",
  },
  {
    id: "2",
    position: "-3 0.1 -3",
  },
  ,
  {
    id: "3",
    position: "0 0.1 -3",
  },
];

AFRAME.registerComponent("load-elements", {
  init: function () {
    //Cyber Car
    var cyberCar = document.createElement("a-entity");
    cyberCar.setAttribute("id", "cyber");
    cyberCar.setAttribute("hoverable", "");
    cyberCar.setAttribute("gltf-model", "#cyberModel");
    cyberCar.setAttribute("scale", "0.3 0.3 0.3");
    cyberCar.setAttribute("position", "0 0.3 -5");
    this.el.appendChild(cyberCar);
    //Prche Car
    var porcheCar = document.createElement("a-entity");
    porcheCar.setAttribute("id", "porche");
    porcheCar.setAttribute("text2", "");
    porcheCar.setAttribute("gltf-model", "#porcheModel");
    porcheCar.setAttribute("scale", "0.5 0.5 0.5");
    porcheCar.setAttribute("position", "-3 0.5 -5");
    this.el.appendChild(porcheCar);
    //Run Car
    var runCar = document.createElement("a-entity");
    runCar.setAttribute("id", "run");
    runCar.setAttribute("text3", "");
    runCar.setAttribute("gltf-model", "#runModel");
    runCar.setAttribute("scale", "1 1 1");
    runCar.setAttribute("position", "3 0.3 -5");
    this.el.appendChild(runCar);

    steps.forEach((step) => {
      var element = document.createElement("a-circle");
      element.setAttribute("id", step.id);
      element.setAttribute("step-hover", "");
      element.setAttribute("change-postion", "");
      element.setAttribute("color", "white");
      element.setAttribute("radius", "0.1");
      element.setAttribute("scale", "2 2 10");
      element.setAttribute("rotation", "-90 0 0");
      element.setAttribute("position", step.position);
      this.el.appendChild(element);
    });
  },
});
