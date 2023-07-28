"use strict";

var _app = require("./app");
var _serviceElements = require("./services/serviceElements");
(0, _serviceElements.useServiceElements)();
document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector("#root");
  var appResult = (0, _app.app)();
  root.innerHTML = appResult;
});