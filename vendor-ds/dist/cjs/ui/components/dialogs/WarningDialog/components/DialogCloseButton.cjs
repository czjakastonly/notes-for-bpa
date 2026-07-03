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
    DialogCloseButton: ()=>DialogCloseButton
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const Cross_16_cjs_namespaceObject = require("../../../../atoms/icons/Cross-16.cjs");
var Cross_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(Cross_16_cjs_namespaceObject);
const CloseIcon = external_styled_components_default()(Cross_16_cjs_default())`
  display: block;
  margin: auto;
  path {
    fill: ${(props)=>props.theme.color.iconDefaultInverse};
  }
`;
const CloseButton = external_styled_components_default().button`
  padding: 0;
  margin: 0;
  position: absolute;
  top: 38px;
  right: 32px;
  display: flex;
  background-color: ${(props)=>props.theme.color.backgroundGrayDefault};
  border-radius: 50%;
  border-color: transparent;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  outline: 0;
  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.color.borderFocus};
    outline-offset: 2px;
  }

  &:hover {
    background-color: ${(props)=>props.theme.color.backgroundGrayBold};
  }
`;
const DialogCloseButton = (props)=>/*#__PURE__*/ external_react_default().createElement(CloseButton, props, /*#__PURE__*/ external_react_default().createElement(CloseIcon, null));
exports.DialogCloseButton = __webpack_exports__.DialogCloseButton;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "DialogCloseButton"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
