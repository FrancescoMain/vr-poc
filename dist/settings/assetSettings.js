"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assetSettings = void 0;
var _AssetItem = require("../common/AssetItem");
var _Asstes = require("../common/Asstes");
var assetSettings = function assetSettings() {
  // background IMg
  var backgImgAsset = new _AssetItem.AssetImg();
  backgImgAsset.setAttributes("id=\"background\" src=\"./assets/background.jpg\"");
  _Asstes.assets.addAssets(backgImgAsset.getHtml());
};
exports.assetSettings = assetSettings;