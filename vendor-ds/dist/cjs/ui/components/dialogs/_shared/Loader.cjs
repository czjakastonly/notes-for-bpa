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
    default: ()=>_shared_Loader
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const circleSpinner = (0, external_styled_components_namespaceObject.keyframes)`
  0% {
    transform: rotate(0deg);
    stroke-dashoffset: calc(0.66 * 100%);
  } 50% {
    transform: rotate(720deg);
    stroke-dashoffset: calc(3.14 * 100%);
  } 100% {
    transform: rotate(1080deg);
    stroke-dashoffset: calc(0.66 * 100%);
  }
`;
const loaderAppearence = (0, external_styled_components_namespaceObject.keyframes)`
  0% {
    opacity: 0
  } 99% {
    opacity: 0
  } 100% {
    opacity: 1
  }
`;
const Wrapper = external_styled_components_default().svg`
  width: 40px;
  height: 40px;
  animation: ${loaderAppearence} 1000ms ease-in;

  circle {
    fill: transparent;
    stroke: ${({ theme })=>theme.color.backgroundPrimary};
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-dasharray: calc(3.14 * 100%);
    transform-origin: 50% 50% 0;
    animation: ${circleSpinner} 2500ms linear infinite forwards;
    animation-delay: 1000ms;
  }
`;
const Loader = ()=>/*#__PURE__*/ external_react_default().createElement(Wrapper, null, /*#__PURE__*/ external_react_default().createElement("circle", {
        cx: "50%",
        cy: "50%",
        r: "48%"
    }));
const _shared_Loader = Loader;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
