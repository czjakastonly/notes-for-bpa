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
    DialogHeader: ()=>DialogHeader
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const status_helpers_cjs_namespaceObject = require("../../../../utils/status.helpers.cjs");
const Container = external_styled_components_default().div`
  padding: 40px 32px 16px 32px;
  text-align: center;
`;
const IconContainer = external_styled_components_default().div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${({ theme, severity })=>(0, status_helpers_cjs_namespaceObject.resolveMainColorForStatus)(theme, severity)}1A;
  margin: 0 auto;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    path {
      fill: ${({ theme, severity })=>(0, status_helpers_cjs_namespaceObject.resolveMainColorForStatus)(theme, severity)};
    }
  }
`;
const TitleText = external_styled_components_default().h2`
  ${(props)=>props.theme.typography.h2};
  display: block;
  align-items: center;
  color: ${(props)=>props.theme.color.textDark};
  margin-bottom: 0;
  margin-top: 0;
`;
const DialogHeader = ({ children, icon, severity, titleId })=>/*#__PURE__*/ external_react_default().createElement(Container, null, /*#__PURE__*/ external_react_default().createElement(IconContainer, {
        "aria-hidden": true,
        severity: severity
    }, icon || (0, status_helpers_cjs_namespaceObject.renderStatusIconForStatus)(severity, '24')), /*#__PURE__*/ external_react_default().createElement(TitleText, {
        "data-cy": "dialogTitle",
        id: titleId
    }, children));
exports.DialogHeader = __webpack_exports__.DialogHeader;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "DialogHeader"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
