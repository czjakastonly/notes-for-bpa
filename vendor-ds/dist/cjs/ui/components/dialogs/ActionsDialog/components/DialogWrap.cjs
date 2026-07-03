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
    DialogWrap: ()=>DialogWrap
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const DialogWrap = external_styled_components_default().div`
  position: relative;
  max-width: 100vw;
  overflow: auto;
  ${({ size })=>{
    if ('extraLarge' === size) return (0, external_styled_components_namespaceObject.css)`
        width: 960px;
      `;
    if ('large' === size) return (0, external_styled_components_namespaceObject.css)`
        width: 800px;
      `;
    if ('small' === size) return (0, external_styled_components_namespaceObject.css)`
        width: 480px;
      `;
    return (0, external_styled_components_namespaceObject.css)`
      width: 640px;
    `;
}};
`;
exports.DialogWrap = __webpack_exports__.DialogWrap;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "DialogWrap"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
