import { assetSettings } from "../settings/assetSettings";
import { AssetImg } from "./AssetItem";

class Assets {
  assets = "";
  html = `<a-assets>${this.assets}</a-assets>`;

  addAssets(asset) {
    this.assets += asset;
    this.html = `<a-assets>${this.assets}</a-assets>`;
  }

  getHtml = () => {
    return this.html;
  };
}

export const assets = new Assets();

assetSettings();
export const useAssets = assets;
