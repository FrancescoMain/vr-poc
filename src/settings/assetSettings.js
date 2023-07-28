import { AssetImg } from "../common/AssetItem";
import { assets } from "../common/Asstes";

export const assetSettings = () => {
  // background IMg
  const backgImgAsset = new AssetImg();
  backgImgAsset.setAttributes(`id="background" src="./assets/background.jpg"`);
  assets.addAssets(backgImgAsset.getHtml());
};
