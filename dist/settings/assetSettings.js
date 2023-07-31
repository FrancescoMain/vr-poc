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
  var backgImgAsset2 = new _AssetItem.AssetImg();
  backgImgAsset2.setAttributes("id=\"background2\" src=\"./assets/background2.jpg\"");
  _Asstes.assets.addAssets(backgImgAsset2.getHtml());
  var backgImgAsset3 = new _AssetItem.AssetImg();
  backgImgAsset3.setAttributes("id=\"background3\" src=\"./assets/background3.jpg\"");
  _Asstes.assets.addAssets(backgImgAsset3.getHtml());
  var backgImgAsset4 = new _AssetItem.AssetImg();
  backgImgAsset4.setAttributes("id=\"background4\" src=\"./assets/background4.jpg\"");
  _Asstes.assets.addAssets(backgImgAsset4.getHtml());
};
exports.assetSettings = assetSettings;