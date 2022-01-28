import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xD14Cfb9fc4253dea4Db00F33ff9D9622601787D2"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Car Keys",
        description: "This NFT will give you access to CarDAO!",
        image: readFileSync("scripts/assets/carkeys.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
