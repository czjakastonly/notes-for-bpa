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
    scrollbars: ()=>scrollbars
});
const external_styled_components_namespaceObject = require("styled-components");
const scrollbars = {
    basic: (0, external_styled_components_namespaceObject.css)`
    &::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }

    &::-webkit-scrollbar-track {
      opacity: 0;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props)=>props.theme.color.borderDefault};
      border-radius: 6px;
      border: 2px solid white;
      background-size: cover;
      background-position: center;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${(props)=>props.theme.color.borderDefaultHover};
    }
  `
};
exports.scrollbars = __webpack_exports__.scrollbars;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "scrollbars"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
