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
    Canvas: ()=>Canvas
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const Canvas = external_styled_components_default().div`
  display: ${({ $display })=>$display};
  min-height: 0;
  min-width: 0;
  align-items: ${({ $alignItems })=>$alignItems};
  justify-content: ${({ $justifyContent })=>$justifyContent};
  flex-direction: ${({ $direction, $reverse })=>$direction && `${$direction}${$reverse ? '-reverse' : ''}`};
  flex-grow: ${({ $flexGrow })=>$flexGrow};
  flex-shrink: ${({ $flexShrink })=>$flexShrink};
  flex-basis: ${({ $flexBasis })=>$flexBasis};
  flex-wrap: ${({ $flexWrap })=>$flexWrap};

  gap: ${({ $gap })=>$gap};
  margin: ${({ $margin })=>$margin};
  padding: ${({ $padding })=>$padding};
  position: ${({ $position })=>$position};
`;
exports.Canvas = __webpack_exports__.Canvas;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Canvas"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
