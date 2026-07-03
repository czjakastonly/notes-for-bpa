"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ("u" > typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    theme: ()=>theme,
    default: ()=>ui_theme
});
const colors_cjs_namespaceObject = require("./atoms/colors.cjs");
const typography_cjs_namespaceObject = require("./atoms/typography.cjs");
const shadows_cjs_namespaceObject = require("./atoms/shadows.cjs");
const scrollbars_cjs_namespaceObject = require("./atoms/scrollbars.cjs");
const zIndex_cjs_namespaceObject = require("./atoms/zIndex.cjs");
const theme = {
    color: colors_cjs_namespaceObject.color,
    typography: typography_cjs_namespaceObject.typography,
    shadows: shadows_cjs_namespaceObject.shadows,
    scrollbars: scrollbars_cjs_namespaceObject.scrollbars,
    zIndex: zIndex_cjs_namespaceObject.zIndex
};
const ui_theme = theme;
exports["default"] = __webpack_exports__["default"];
exports.theme = __webpack_exports__.theme;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default",
    "theme"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
