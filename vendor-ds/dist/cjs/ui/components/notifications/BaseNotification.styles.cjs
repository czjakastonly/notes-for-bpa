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
    BaseNotification: ()=>BaseNotification
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const Cross_16_cjs_namespaceObject = require("../../atoms/icons/Cross-16.cjs");
var Cross_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(Cross_16_cjs_namespaceObject);
const IconContainer = external_styled_components_default().div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;
const CloseIconContainer = external_styled_components_default()(IconContainer)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-left: auto;
`;
const linkStyle = (0, external_styled_components_namespaceObject.css)`
  color: ${({ theme })=>theme.color.textLink};
  text-decoration: none;
  transition: color 0.2s, text-decoration 0.2s;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: ${({ theme })=>theme.color.textLinkPressed};
    text-decoration: underline;
  }
`;
const Content = external_styled_components_default().div`
  ${(props)=>props.theme.typography.paragraph1};
  color: ${(props)=>props.theme.color.textDark};

  a {
    ${linkStyle}
  }
`;
const ContentSmall = external_styled_components_default().div`
  ${(props)=>props.theme.typography.paragraph2};
  color: ${(props)=>props.theme.color.textDark};

  a {
    ${linkStyle}
  }
`;
const StatusIconContainer = external_styled_components_default().div`
  flex-shrink: 0;
  path {
    fill: ${({ $statusColor })=>$statusColor};
  }
`;
const Container = external_styled_components_default().div`
  display: flex;
  gap: 12px;
  padding: 16px;
  border-radius: 4px;
  background: ${(props)=>props.$statusColor};
  ${StatusIconContainer} {
    margin-top: 4px;
  }

  ${CloseIconContainer} {
    margin-top: 4px;
  }
`;
const ContainerSmall = external_styled_components_default()(Container)`
  padding: 12px;
  padding-left: 16px;

  ${StatusIconContainer} {
    margin-top: 2px;
  }

  ${CloseIconContainer} {
    margin-top: 2px;
  }
`;
const StyledCloseSVG = external_styled_components_default()(Cross_16_cjs_default())`
  cursor: pointer;
  path {
    fill: ${({ theme })=>theme.color.iconDefault};
    transition: fill 0.2s;
  }
  &:hover {
    path {
      fill: ${({ theme })=>theme.color.iconSubtle};
    }
  }
`;
const BaseNotification = {
    Container,
    ContainerSmall,
    IconContainer,
    CloseIconContainer,
    Content,
    ContentSmall,
    StyledCloseSVG,
    StatusIconContainer
};
exports.BaseNotification = __webpack_exports__.BaseNotification;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "BaseNotification"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
