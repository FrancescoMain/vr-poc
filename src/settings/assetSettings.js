import { AssetImg } from "../common/AssetItem";
import { assets } from "../common/Asstes";

export const assetSettings = () => {
  // background IMg
  const backgImgAsset = new AssetImg();
  backgImgAsset.setAttributes(`id="background" src="./assets/background.jpg"`);
  assets.addAssets(backgImgAsset.getHtml());

  const backgImgAsset2 = new AssetImg();
  backgImgAsset2.setAttributes(
    `id="background2" src="./assets/background2.jpg"`
  );
  assets.addAssets(backgImgAsset2.getHtml());

  const backgImgAsset3 = new AssetImg();
  backgImgAsset3.setAttributes(
    `id="background3" src="./assets/background3.jpg"`
  );
  assets.addAssets(backgImgAsset3.getHtml());

  const backgImgAsset4 = new AssetImg();
  backgImgAsset4.setAttributes(
    `id="background4" src="./assets/background4.jpg"`
  );
  assets.addAssets(backgImgAsset4.getHtml());
};
