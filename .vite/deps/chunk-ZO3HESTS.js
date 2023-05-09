import {
  __esm
} from "./chunk-AC2VUBZ6.js";

// node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha, getOverlayAlpha_default;
var init_getOverlayAlpha = __esm({
  "node_modules/@mui/material/styles/getOverlayAlpha.js"() {
    getOverlayAlpha = (elevation) => {
      let alphaValue;
      if (elevation < 1) {
        alphaValue = 5.11916 * elevation ** 2;
      } else {
        alphaValue = 4.5 * Math.log(elevation + 1) + 2;
      }
      return (alphaValue / 100).toFixed(2);
    };
    getOverlayAlpha_default = getOverlayAlpha;
  }
});

export {
  getOverlayAlpha_default,
  init_getOverlayAlpha
};
//# sourceMappingURL=chunk-ZO3HESTS.js.map
