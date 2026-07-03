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
    focusInputOutlineStyle: ()=>focusInputOutlineStyle,
    FieldStyles: ()=>FieldStyles
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const focusInputOutlineStyle = (0, external_styled_components_namespaceObject.css)`
  outline: 2px solid ${({ theme })=>theme.color.borderFocus};
`;
const IconWrap = external_styled_components_default().span`
  ${({ theme })=>theme.typography.uiElement};
  display: flex;
  align-items: center;
  height: 16px;
  width: fit-content; // eventually remove it
  margin: 12px;
  color: ${({ theme })=>theme.color.textSubtle};
  ${({ $color })=>$color && (0, external_styled_components_namespaceObject.css)`
      & svg path {
        fill: ${$color};
      }
    `}
`;
const IconLeftWrap = external_styled_components_default()(IconWrap).attrs({
    tabIndex: -1
})`
  margin-right: 0;
`;
const IconRightWrap = external_styled_components_default()(IconWrap).attrs({
    tabIndex: -1
})`
  margin-left: 0;
  outline: none;
`;
const IconUnitsWrap = external_styled_components_default()(IconWrap).attrs({
    tabIndex: -1
})`
  margin-left: 0;
  outline: none;
  & svg path {
    fill: ${(props)=>props.theme.color.iconDefault};
  }
`;
const ButtonElementWrap = external_styled_components_default().div`
  margin: 0;
  padding: 0;
  border-width: 0 0 0 1px;
  border-style: solid;
  border-color: ${({ theme })=>theme.color.borderDefault};
`;
const InputElementWrap = external_styled_components_default().div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 3px;
  outline: 2px solid transparent;
  outline-offset: -1px;
  transition: outline-color 0.2s;

  &:focus-within /* if has(:focus-visible) was used then it will blink on icon click */ {
    z-index: 1; /* to make outline cover additional action button */
    ${focusInputOutlineStyle}
  }

  &:has(+ ${ButtonElementWrap}) {
    border-radius: 3px 0 0 3px;
  }

  ${({ theme, $disabled })=>$disabled && (0, external_styled_components_namespaceObject.css)`
      pointer-events: none;
      background: ${theme.color.backgroundDefaultHover};

      & input {
        color: ${theme.color.textPlaceholder};
      }
      & ${IconWrap} svg path {
        fill: ${theme.color.iconSubtle};
      }
    `}
`;
const FieldWrap = external_styled_components_default().div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme, $borderColor })=>$borderColor || theme.color.borderDefault};
  border-radius: 4px;
  background: ${({ theme })=>theme.color.backgroundDefault};

  ${({ theme, $borderColor })=>(0, external_styled_components_namespaceObject.css)`
    border-color: ${$borderColor || theme.color.borderDefault};
    ${ButtonElementWrap} {
      border-color: ${$borderColor || theme.color.borderDefault};
    }
  `}
`;
const InputElement = external_styled_components_default().input`
  ${({ theme })=>theme.typography.uiElement};
  font-family: inherit;
  color: ${({ theme })=>theme.color.textDark};
  width: 100%;
  min-width: 48px;
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  background: transparent;
  appearance: none;
  padding: 10px 12px;

  &::placeholder {
    color: ${({ theme })=>theme.color.textPlaceholder};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  ${IconLeftWrap}+& {
    padding-left: 8px;
  }
`;
const FieldStyles = {
    FieldWrap,
    InputElementWrap,
    ButtonElementWrap,
    IconWrap,
    IconLeftWrap,
    InputElement,
    IconRightWrap,
    IconUnitsWrap
};
exports.FieldStyles = __webpack_exports__.FieldStyles;
exports.focusInputOutlineStyle = __webpack_exports__.focusInputOutlineStyle;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "FieldStyles",
    "focusInputOutlineStyle"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
