"use strict";

var steps = [{
  id: "1",
  position: "3 0.1 -3"
}, {
  id: "2",
  position: "-3 0.1 -3"
},, {
  id: "3",
  position: "0 0.1 -3"
}];
AFRAME.registerComponent("load-elements", {
  init: function init() {
    var _this = this;
    steps.forEach(function (step) {
      var element = document.createElement("a-circle");
      element.setAttribute("id", step.id);
      element.setAttribute("step-hover", "");
      element.setAttribute("change-postion", "");
      element.setAttribute("color", "white");
      element.setAttribute("radius", "0.1");
      element.setAttribute("scale", "2 2 10");
      element.setAttribute("rotation", "-90 0 0");
      element.setAttribute("position", step.position);
      _this.el.appendChild(element);
    });
  }
});