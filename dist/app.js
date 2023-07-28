"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;
var _AFrame = require("./common/AFrame");
var app = function app() {
  return "<div class=\"vr-cont\">\n            ".concat(_AFrame.useAFrame.getHtml(), "\n          </div>");
};
exports.app = app;