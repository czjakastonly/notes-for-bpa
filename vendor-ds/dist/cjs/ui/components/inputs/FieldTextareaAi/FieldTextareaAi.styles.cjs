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
    FieldTextareaAiStyles: ()=>FieldTextareaAiStyles
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const external_react_textarea_autosize_namespaceObject = require("react-textarea-autosize");
var external_react_textarea_autosize_default = /*#__PURE__*/ __webpack_require__.n(external_react_textarea_autosize_namespaceObject);
const styles_cjs_namespaceObject = require("../../buttons/_shared/styles.cjs");
const Field_styles_cjs_namespaceObject = require("../_shared/Field.styles.cjs");
const FieldWrap = external_styled_components_default().div`
  display: flex;
  width: 100%;
  border: 1px solid ${({ theme, $borderColor })=>$borderColor || theme.color.borderDefault};
  background: ${({ theme })=>theme.color.backgroundDefault};
  border-radius: 4px;
  height: auto;
  align-items: flex-end;
  outline: 2px solid transparent;
  outline-offset: -1px;
  transition: outline-color 0.2s;

  &:has(:focus-visible) {
    outline-offset: -1px;
    ${Field_styles_cjs_namespaceObject.focusInputOutlineStyle}
  }

  ${({ theme, $disabled })=>$disabled && (0, external_styled_components_namespaceObject.css)`
      pointer-events: none;
      background: ${theme.color.backgroundDefaultHover};
      & > textarea {
        color: ${theme.color.textPlaceholder};
      }
      svg path {
        fill: ${theme.color.iconSubtle};
      }
    `}
`;
const TextareaAutosizeElement = external_styled_components_default()(external_react_textarea_autosize_default())`
  ${({ theme })=>theme.typography.uiElement};
  font-family: inherit;
  color: ${({ theme })=>theme.color.textDark};
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  background: transparent;
  appearance: none;
  resize: none;
  padding: 8px 12px;

  &::placeholder {
    color: ${({ theme })=>theme.color.textPlaceholder};
  }
`;
const ActionButton = external_styled_components_default().button`
  border-radius: 4px;
  background-color: ${({ theme })=>theme.color.backgroundPrimary};
  color: ${({ theme })=>theme.color.textDefaultInverse};
  border-color: ${({ theme })=>theme.color.backgroundPrimary};
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  padding: 7px;
  margin: 2px;
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s, color 0.2s, background-color 0.2s, border-color 0.2s, outline-color 0.2s;

  &:focus-visible {
    ${styles_cjs_namespaceObject.focusButtonOutlineStyle}
  }

  svg path {
    fill: ${({ theme })=>theme.color.iconDefaultInverse};
  }

  &:hover {
    background-color: ${({ theme })=>theme.color.backgroundPrimaryHover};
    border-color: ${({ theme })=>theme.color.backgroundPrimaryHover};
  }

  &:active {
    background-color: ${({ theme })=>theme.color.backgroundPrimaryPressed};
    border-color: ${({ theme })=>theme.color.backgroundPrimaryPressed};
    color: ${({ theme })=>theme.color.backgroundPinkSubtle};
    & svg path {
      fill: ${({ theme })=>theme.color.backgroundPinkSubtle};
    }
  }

  ${({ disabled, theme })=>disabled && (0, external_styled_components_namespaceObject.css)`
      pointer-events: none;
      opacity: 0.4;
      color: ${theme.color.textDefaultInverse};

      & svg path {
        fill: ${theme.color.textDefaultInverse};
      }
    `}

  ${({ disabled, isPressed, theme })=>!disabled && isPressed && (0, external_styled_components_namespaceObject.css)`
      background-color: ${theme.color.backgroundPrimaryHover};
      border-color: ${theme.color.backgroundPrimaryHover};
    `}
`;
const FieldTextareaAiStyles = {
    FieldWrap,
    TextareaAutosizeElement,
    ActionButton
};
exports.FieldTextareaAiStyles = __webpack_exports__.FieldTextareaAiStyles;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "FieldTextareaAiStyles"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
