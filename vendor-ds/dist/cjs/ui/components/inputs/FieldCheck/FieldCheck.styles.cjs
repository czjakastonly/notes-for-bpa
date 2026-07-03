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
    default: ()=>FieldCheck_styles
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const TICK_ICON_CLASS = 'tick-icon';
const InputElement = external_styled_components_default().input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const TooltipWrap = external_styled_components_default().span`
  line-height: 16px;
  margin-left: 4px;
`;
const Text = external_styled_components_default().span`
  ${({ theme })=>theme.typography.uiElement}
  margin-left: 8px;
  user-select: none;
`;
const RequiredLabelSuffix = external_styled_components_default().span.attrs({
    'aria-hidden': true
})`
  color: ${({ theme })=>theme.color.iconPink};
  margin-left: 2px;
`;
const FieldCheckWrap = external_styled_components_default().div`
  display: flex;
  flex-direction: column;
`;
const LabelWrap = external_styled_components_default().div`
  display: flex;
  position: relative;
  width: fit-content;
  align-items: center;
  border-radius: 4px; /* for focus outline to look like in text inputs */
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: outline-color 0.2s;

  &:has(input:focus-visible) {
    outline: 2px solid ${({ theme })=>theme.color.borderFocus};
  }
`;
const LabelElement = external_styled_components_default().label`
  display: flex;
  align-items: start;
  cursor: pointer;
  word-break: break-word;
  border-radius: 2px;

  ${({ $disabled, theme })=>$disabled && (0, external_styled_components_namespaceObject.css)`
      pointer-events: none;
      ${Text} {
        color: ${theme.color.textPlaceholder};
      }
    `}

  &:hover .${TICK_ICON_CLASS} {
    border-color: ${({ theme })=>theme.color.borderPrimary};
  }
`;
const InputMessageWrap = external_styled_components_default().div`
  ${({ theme })=>theme.typography.uiElementSmallStrong};
  width: 100%;
  color: ${({ theme, $textColor })=>$textColor || theme.color.textSubtle};
  margin-top: 4px;
  margin-left: 24px;
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
const FieldCheck_styles = {
    LabelElement,
    Text,
    FieldCheckWrap,
    LabelWrap,
    InputElement,
    RequiredLabelSuffix,
    TooltipWrap,
    TICK_ICON_CLASS,
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
