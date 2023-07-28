"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attributeSettings = void 0;
var _APlane = require("../common/APlane");
var _ASky = require("../common/ASky");
var attributeSettings = function attributeSettings() {
  _ASky.useASky.setBackground("#background");
  _APlane.useAPlane.setAttributes("rotation=\"-90 0 0\" width=\"20\" height=\"20\" repeat=\"10 10\" color=\"grey\"");
};
exports.attributeSettings = attributeSettings;