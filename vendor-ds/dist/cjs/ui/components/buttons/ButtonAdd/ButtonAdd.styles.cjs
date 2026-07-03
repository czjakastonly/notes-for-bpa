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
    IconWrap: ()=>IconWrap,
    Text: ()=>Text,
    ButtonElement: ()=>ButtonElement
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const styles_cjs_namespaceObject = require("../_shared/styles.cjs");
const IconWrap = external_styled_components_default().div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ size })=>'standard' === size ? '10px' : '6px'};
  border-radius: 50%;
  background-color: ${({ theme })=>theme.color.backgroundDefault};
  border: 1px solid ${({ theme })=>theme.color.borderDefault};
  transition: background-color 0.2s, border-color 0.2s;
  svg path {
    transition: fill 0.2s;
  }
`;
const ButtonElement = external_styled_components_default().button`
  font-family: inherit;
  border-style: none;
  border-radius: 16px;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  transition: color 0.2s;
  background: none;
  width: fit-content;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props)=>props.theme.color.textDefault};
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: outline-color 0.2s;

  &:focus-visible {
    ${styles_cjs_namespaceObject.focusButtonOutlineStyle}
  }

  ${({ size })=>{
    if ('standard' === size) return (0, external_styled_components_namespaceObject.css)`
        font-size: 16px;
        gap: 16px;
      `;
    if ('small' === size) return (0, external_styled_components_namespaceObject.css)`
        font-size: 14px;
        gap: 12px;
      `;
}}

  ${({ disabled })=>disabled && (0, external_styled_components_namespaceObject.css)`
      pointer-events: none;
      opacity: 0.4;
    `}


  &:hover {
    color: ${({ theme })=>theme.color.textHover};
    ${IconWrap} {
      background-color: ${({ theme })=>theme.color.backgroundGreenDefault};
      border-color: ${({ theme })=>theme.color.backgroundGreenDefault};
      svg path {
        fill: ${({ theme })=>theme.color.iconDefaultInverse};
      }
    }
  }

  &:active {
    color: ${({ theme })=>theme.color.textHover};
    ${IconWrap} {
      background-color: ${({ theme })=>theme.color.backgroundGreenBold};
      border-color: ${({ theme })=>theme.color.backgroundGreenBold};
      svg path {
        fill: ${({ theme })=>theme.color.iconDefaultInverse};
      }
    }
  }

  ${({ isPressed, disabled, theme })=>isPressed && !disabled && (0, external_styled_components_namespaceObject.css)`
      color: ${theme.color.textHover};
      ${IconWrap} {
        background-color: ${theme.color.backgroundGreenDefault};
        border-color: ${theme.color.backgroundGreenDefault};
        svg path {
          fill: ${theme.color.iconDefaultInverse};
        }
      }
    `}
`;
const Text = external_styled_components_default().span`
  display: block;
  transition: color 0.2s;
  background: none;
  padding: 0;
  color: inherit;
  cursor: pointer;

  &::first-letter {
    text-transform: capitalize;
  }
`;
exports.ButtonElement = __webpack_exports__.ButtonElement;
exports.IconWrap = __webpack_exports__.IconWrap;
exports.Text = __webpack_exports__.Text;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ButtonElement",
    "IconWrap",
    "Text"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
