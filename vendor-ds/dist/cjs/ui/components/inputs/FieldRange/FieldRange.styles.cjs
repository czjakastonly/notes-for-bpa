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
    default: ()=>FieldRange_styles
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const Container = external_styled_components_default().div`
  position: relative;
  display: flex;
  width: 100%;
  z-index: 0;
`;
const Bar = external_styled_components_default().div`
  background-color: ${({ theme })=>theme.color.backgroundGrayBold};
  height: 6px;
  max-width: 100%;
  position: absolute;
  left: 0;
  top: calc(50% - 2px);
  border-radius: 3px 3px 3px 3px;
  z-index: -1;
`;
const BarBg = external_styled_components_default()(Bar)`
  background-color: ${({ theme })=>theme.color.backgroundGraySubtle};
  border-radius: 3px;
  right: 0;
`;
const SliderBarStyle = (0, external_styled_components_namespaceObject.css)`
  width: 100%;
  height: 6px;
  cursor: pointer;
  background: transparent;
  border-radius: 3px;
`;
const SliderThumbStyle = (0, external_styled_components_namespaceObject.css)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: ${({ theme })=>theme.shadows.basic};
  background-color: ${({ theme })=>theme.color.backgroundDefault};
  cursor: pointer;
`;
const Slider = external_styled_components_default().input`
  appearance: none;
  width: 100%;
  margin: 0;
  background: transparent;

  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    ${SliderBarStyle}
  }
  &::-webkit-slider-thumb {
    ${SliderThumbStyle}
    appearance: none;
    margin-top: -6px;
  }
  &::-moz-range-track {
    ${SliderBarStyle}
  }
  &::-moz-range-thumb {
    ${SliderThumbStyle}
    border: none;
  }
  &::-moz-focus-outer {
    border: 0;
  }
  &::-ms-track {
    ${SliderBarStyle}
    color: transparent;
    border-color: transparent;
  }
  &::-ms-fill-lower {
    background: transparent;
    border-radius: 3px;
  }
  &::-ms-fill-upper {
    background: transparent;
    border-radius: 3px;
  }
  &::-ms-thumb {
    ${SliderThumbStyle}
  }
`;
const FieldRange_styles = {
    Container,
    Slider,
    Bar,
    BarBg
};
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
