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
    default: ()=>ButtonFieldSelect_styles
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const Field_styles_cjs_namespaceObject = require("../../_shared/Field.styles.cjs");
const ButtonElement = external_styled_components_default().button`
  font-family: inherit;
  border: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  background: none;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 4px;
  outline: 2px solid transparent;
  outline-offset: -1px;
  transition: outline-color 0.2s;
  padding: 0;
  cursor: pointer;
  overflow: hidden;

  &:focus {
    &:not(:active) {
      z-index: 1; /* to make outline cover additional action button */
      ${Field_styles_cjs_namespaceObject.focusInputOutlineStyle}
    }
  }

  &:active {
    color: ${(props)=>props.theme.color.textHover};

    & svg path {
      fill: ${({ theme })=>theme.color.iconHover};
    }
  }

  &:has(+ ${Field_styles_cjs_namespaceObject.FieldStyles.ButtonElementWrap}) {
    border-radius: 3px 0 0 3px;
  }

  ${({ theme, $isPlaceholder })=>$isPlaceholder && (0, external_styled_components_namespaceObject.css)`
      color: ${theme.color.textPlaceholder};
    `}

  ${({ theme, disabled })=>disabled && (0, external_styled_components_namespaceObject.css)`
      color: ${theme.color.textPlaceholder};
      background-color: ${theme.color.backgroundDefaultHover};
      cursor: default;
      & svg path {
        fill: ${theme.color.iconSubtle};
      }
    `}
`;
const Text = external_styled_components_default().span`
  ${({ theme })=>theme.typography.uiElement};
  text-align: start;
  font-family: inherit;
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  background: transparent;
  padding: 10px 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  * + & {
    padding-left: 8px; // smaller padding when icon on the left
  }
`;
const ButtonFieldSelect_styles = {
    ButtonElement,
    Text
};
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
