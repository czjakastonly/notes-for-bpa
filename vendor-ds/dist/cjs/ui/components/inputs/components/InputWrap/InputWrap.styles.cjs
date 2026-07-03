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
    default: ()=>InputWrap_styles
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const InputLabel = external_styled_components_default().span`
  ${({ theme })=>theme.typography.uiElementSmallStrong};
  color: ${({ theme })=>theme.color.textSubtle};
  margin-bottom: 4px;
  display: block;
  cursor: default;
  transition: color 0.2s;
`;
const InputContainer = external_styled_components_default().div`
  min-width: 0;
  width: 100%;
  position: relative; // needed only in InputMessageWrap for ellipsis. Should not be needed by any InputField

  &:has([aria-expanded='true']), // for dropdown buttons
  &:focus-within {
    ${InputLabel} {
      color: ${({ theme })=>theme.color.textDark};
    }
  }

  &:has(input:disabled) {
    // future, todo - we will have contenteditable divs AND we don't want it to work with ButtonAdditionalAction disabled, and for selects with disabled options
    ${InputLabel} {
      color: ${(props)=>props.theme.color.textPlaceholder};
    }
  }
`;
const InputRequiredLabelSuffix = external_styled_components_default().span.attrs({
    ariaHidden: true
})`
  color: ${({ theme })=>theme.color.iconPink};
  margin-left: 2px;
`;
const InputMessageWrap = external_styled_components_default().div`
  ${({ theme })=>theme.typography.uiElementSmall};
  width: 100%;
  color: ${({ theme, $textColor })=>$textColor || theme.color.textSubtle};
  margin-top: 4px;
  display: flex;
  align-items: flex-start;
`;
const InputMessageIconWrap = external_styled_components_default().div`
  display: flex;
  align-items: center;
  height: 12px;
  width: 12px;
  margin-top: 2px;
  margin-right: 4px;
  ${({ $color })=>$color && (0, external_styled_components_namespaceObject.css)`
      & svg path {
        fill: ${$color};
      }
    `}
`;
const InputWrap_styles = {
    InputContainer,
    InputLabel,
    InputRequiredLabelSuffix,
    InputMessageWrap,
    InputMessageIconWrap
};
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
