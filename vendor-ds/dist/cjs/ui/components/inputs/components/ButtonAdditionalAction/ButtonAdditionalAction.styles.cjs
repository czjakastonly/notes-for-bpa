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
    default: ()=>ButtonAdditionalAction_styles
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const Field_styles_cjs_namespaceObject = require("../../_shared/Field.styles.cjs");
const ButtonElement = external_styled_components_default().button`
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  text-decoration: none;
  border: none;
  border-radius: 0 3px 3px 0;
  padding: 0;
  margin: 0;
  height: 100%;

  display: flex;
  align-items: center;
  background: none;
  outline: 2px solid transparent;
  outline-offset: -1px;
  transition: outline-color 0.2s;

  &:active {
    background-color: ${({ theme })=>theme.color.backgroundDefaultTransparentPressed};
    color: ${(props)=>props.theme.color.textHover};

    & svg path {
      fill: ${({ theme })=>theme.color.iconHover};
    }
  }

  &:focus-visible,
  &:has([aria-expanded='true']) {
    ${Field_styles_cjs_namespaceObject.focusInputOutlineStyle};
  }

  ${({ disabled, isPressed, theme })=>!disabled && isPressed && (0, external_styled_components_namespaceObject.css)`
      background-color: ${theme.color.backgroundDefaultTransparentHover};
      color: ${theme.color.textHover};

      & svg path {
        fill: ${theme.color.iconHover};
      }
    `}

  ${({ theme, disabled })=>disabled && (0, external_styled_components_namespaceObject.css)`
      pointer-events: none;
      background: ${theme.color.backgroundDefaultActive};

      & svg path {
        fill: ${theme.color.iconSubtle};
      }
    `}
`;
const ButtonAdditionalAction_styles = {
    ButtonElement
};
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
