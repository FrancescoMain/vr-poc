"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useServiceElements = void 0;
var _Elements = require("../common/Elements");
var _ASky = require("../common/ASky");
var _Asstes = require("../common/Asstes");
var _attributeSettings = require("../settings/attributeSettings");
var _APlane = require("../common/APlane");
var _ACamera = require("../common/ACamera");
var _elementSettings = require("../settings/elementSettings");
var useServiceElements = function useServiceElements() {
  (0, _attributeSettings.attributeSettings)();
  _Elements.useElements.addElement(_Asstes.useAssets.getHtml());
  _Elements.useElements.addElement(_ASky.useASky.getHtml());
  _Elements.useElements.addElement(_APlane.useAPlane.getHtml());
  _Elements.useElements.addElement(_ACamera.useACamera.getHtml());
  _Elements.useElements.addElement(_elementSettings.elements);
};
exports.useServiceElements = useServiceElements;