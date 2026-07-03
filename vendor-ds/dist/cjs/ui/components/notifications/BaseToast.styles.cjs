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
    BaseToast: ()=>BaseToast
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const external_BaseNotification_styles_cjs_namespaceObject = require("./BaseNotification.styles.cjs");
const Content = external_styled_components_default()(external_BaseNotification_styles_cjs_namespaceObject.BaseNotification.Content)`
  color: ${({ theme })=>theme.color.textDefaultInverse};
`;
const Container = external_styled_components_default()(external_BaseNotification_styles_cjs_namespaceObject.BaseNotification.Container)`
  display: flex;
  align-items: center;
  background-color: ${({ theme })=>theme.color.textDark};
  gap: 12px;
  padding: 16px;
  border-radius: 4px;
  border-left-width: 4px;
  border-left-style: solid;
  border-left-color: ${({ $statusColor })=>$statusColor};

  & a {
    text-decoration: underline;
    text-decoration-color: ${(props)=>props.theme.color.textDefault};
  }
`;
const IconContainer = external_styled_components_default().div`
  flex-shrink: 0;
`;
const ActionButton = external_styled_components_default().button`
  ${(props)=>props.theme.typography.uiElementLabel};
  cursor: pointer;
  background: none;
  color: ${({ theme })=>theme.color.textDefaultInverse};
  border: 1px solid ${({ theme })=>theme.color.borderDefault};
  border-radius: 50px;
  padding: 6px 12px;
  transition: border-color 0.2, color 0.2s;

  &:hover {
    color: ${({ theme })=>theme.color.textPlaceholder};
    border-color: ${({ theme })=>theme.color.borderDefaultHover};
  }
`;
const StyledCloseSVG = external_styled_components_default()(external_BaseNotification_styles_cjs_namespaceObject.BaseNotification.StyledCloseSVG)`
  path {
    fill: ${({ theme })=>theme.color.iconSubtle};
    transition: fill 0.2s;
  }
  &:hover {
    path {
      fill: ${({ theme })=>theme.color.iconDefault};
    }
  }
`;
const BaseToast = {
    Container,
    IconContainer,
    Content,
    ActionButton,
    StyledCloseSVG
};
exports.BaseToast = __webpack_exports__.BaseToast;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "BaseToast"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
