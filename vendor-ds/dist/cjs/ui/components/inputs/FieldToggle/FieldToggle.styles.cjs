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
    default: ()=>FieldToggle_styles
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const Label = external_styled_components_default().label`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  width: ${({ $size })=>'small' === $size ? '30' : '44'}px;
  height: ${({ $size })=>'small' === $size ? '16' : '24'}px;
  border-radius: ${({ $size })=>'small' === $size ? '8' : '12'}px;

  &:has(input:focus-visible) {
    outline: 2px solid ${({ theme })=>theme.color.borderFocus};
  }
`;
const Slider = external_styled_components_default().span`
  position: relative;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    position: absolute;
    transform: translate(0, -50%);
    transition: all 0.3s ease;
  }

  &:before {
    left: 1px;
    width: ${({ $size })=>'small' === $size ? '28' : '42'}px;
    height: ${({ $size })=>'small' === $size ? '12' : '20'}px;
    background-color: ${({ theme })=>theme.color.iconSubtle};
    border-radius: 10px;
  }

  &:after {
    left: 0;
    width: ${({ $size })=>'small' === $size ? '16' : '24'}px;
    height: ${({ $size })=>'small' === $size ? '16' : '24'}px;
    background-color: ${({ theme })=>theme.color.iconDefaultInverse};
    border-radius: 50%;
    box-shadow: ${({ theme })=>theme.shadows.basic};
  }

  ${({ $checked, theme })=>$checked && (0, external_styled_components_namespaceObject.css)`
      &:before {
        background-color: ${theme.color.iconActive};
      }

      &:after {
        background-color: ${theme.color.backgroundDefault};
        transform: translate(83%, -50%);
      }
    `};
  ${({ $disabled })=>$disabled && (0, external_styled_components_namespaceObject.css)`
      opacity: 0.5;
      cursor: default;
    `}
`;
const FieldToggle_styles = {
    Label,
    Slider
};
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
