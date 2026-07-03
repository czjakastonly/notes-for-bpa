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
    LinkStyles: ()=>LinkStyles
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const IconWrap = external_styled_components_default().span`
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
`;
const TextWrap = external_styled_components_default().span`
  &::first-letter {
    text-transform: capitalize;
  }
`;
const LinkPrimary = external_styled_components_default().a`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props)=>props.theme.typography.uiElement};
  color: ${({ theme })=>theme.color.textDefaultInverse};
  font-style: normal;
  font-family: inherit;
  text-wrap: nowrap;
  text-decoration: none;

  border-style: solid;
  border-radius: 18px;
  border-width: 1px;
  outline: 0;
  border-color: ${({ theme })=>theme.color.borderPrimary};

  width: fit-content;
  height: 36px;
  padding: 7px 15px;
  background-color: ${({ theme })=>theme.color.backgroundPrimary};

  cursor: pointer;
  transition: opacity 0.2s, color 0.2s, background-color 0.2s, border-color 0.2s;

  ${TextWrap} {
    padding: 0 8px;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.color.borderFocus};
    outline-offset: 2px;
  }

  & svg path {
    fill: ${({ theme })=>theme.color.iconDefaultInverse};
  }

  &:hover,
  &:active {
    background-color: ${({ isPressed, theme })=>isPressed ? theme.color.backgroundPrimaryPressed : theme.color.backgroundPrimaryHover};
    border-color: ${({ isPressed, theme })=>isPressed ? theme.color.backgroundPrimaryPressed : theme.color.backgroundPrimaryHover};
  }

  ${({ disabled, theme })=>disabled && (0, external_styled_components_namespaceObject.css)`
      opacity: 0.35;
      pointer-events: none;
      color: ${theme.color.textDefaultInverse};

      & svg path {
        fill: ${theme.color.iconDefaultInverse};
      }
    `}

  ${({ disabled, isPressed, theme })=>!disabled && isPressed && (0, external_styled_components_namespaceObject.css)`
      background-color: ${theme.color.backgroundPrimaryPressed}; // TODO @design-system
      border-color: ${theme.color.backgroundPrimaryPressed}; // TODO @design-system
    `}

  ${({ $size })=>'small' === $size && (0, external_styled_components_namespaceObject.css)`
      height: 24px;
      padding: 3px 7px;
      ${(props)=>props.theme.typography.uiElementSmallStrong};
    `}
`;
const LinkStyles = {
    LinkPrimary,
    TextWrap,
    IconWrap
};
exports.LinkStyles = __webpack_exports__.LinkStyles;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "LinkStyles"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
