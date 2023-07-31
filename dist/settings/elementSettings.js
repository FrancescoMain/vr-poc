"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elements = void 0;
var _ACircle = require("../common/ACircle");
var _APlane = require("../common/APlane");
var _Pannel = require("../common/Pannel");
var _steps = require("../data/steps");
var elementsList;
var newPlane = new _APlane.APlane();
newPlane.setAttributes("id=\"cyber\" hoverable width=\"2\" height=\"2\" position=\"0 0.1 -5\" color=\"white\"");
elementsList += newPlane.getHtml();
var newPlane2 = new _APlane.APlane();
newPlane2.setAttributes("id=\"porche\" text2 width=\"2\" height=\"2\" position=\"-3 0.1 -5\" color=\"white\"");
elementsList += newPlane2.getHtml();
var newPlane3 = new _APlane.APlane();
newPlane3.setAttributes("id=\"run\" text3 width=\"2\" height=\"2\" position=\"3 0.1 -5\" color=\"white\"");
elementsList += newPlane3.getHtml();
_steps.steps.forEach(function (step) {
  var circle = new _ACircle.Acircle();
  circle.setAttributes("id=\"".concat(step.id, "\" step-hover change-position=\"").concat(step.background, "\" color=\"white\" radius=\"0.1\" scale=\"2 2 10\" rotation=\"-90 0 0\" position=\"").concat(step.position, "\" "));
  elementsList += circle.getHtml();
});
var circle = new _ACircle.Acircle();
circle.setAttributes("id=\"cerchio\" test color=\"black\" radius=\"0.1\" scale=\"2 2 10\" rotation=\"0 0 0\" position=\"0 1.5 -4.9\" ");
var newPannel = new _Pannel.Pannel();
circle.setChildren(newPannel.getHtml());
elementsList += circle.getHtml();
var elements = elementsList;
exports.elements = elements;