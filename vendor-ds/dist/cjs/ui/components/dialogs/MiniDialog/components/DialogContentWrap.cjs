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
    DialogContentWrap: ()=>DialogContentWrap
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const DialogContentWrap = external_styled_components_default().div`
  ${(props)=>props.theme.typography.uiElementSmall};
  max-height: calc(100vh - 300px);
  max-width: 100%;
  overflow: auto;
  padding: 0;
  ${(props)=>props.theme.scrollbars.basic};
  transition: max-height 0.3s ease-in-out;
  ${({ isLoading })=>isLoading && (0, external_styled_components_namespaceObject.css)`
      max-height: 112px;
    `}
`;
exports.DialogContentWrap = __webpack_exports__.DialogContentWrap;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "DialogContentWrap"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
