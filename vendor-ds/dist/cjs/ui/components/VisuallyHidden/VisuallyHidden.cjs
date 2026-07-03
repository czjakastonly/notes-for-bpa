"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.n = (module)=>{
        var getter = module && module.__esModule ? ()=>module['default'] : ()=>module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
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
    VisuallyHidden: ()=>VisuallyHidden
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const VisuallyHidden = external_styled_components_default().span`
  border: 0 !important;
  clip-path: inset(0) !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  height: 1px !important;
  margin: -1px !important;
  outline-offset: 0 !important;
  outline: 0 !important;
  overflow: hidden !important;
  padding: 0 !important;
  pointer-events: none !important;
  position: absolute !important;
  width: 1px !important;
`;
exports.VisuallyHidden = __webpack_exports__.VisuallyHidden;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "VisuallyHidden"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
