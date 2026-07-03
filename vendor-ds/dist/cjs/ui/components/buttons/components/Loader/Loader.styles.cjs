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
    DotsWrap: ()=>DotsWrap,
    Dot: ()=>Dot
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const fadeKeyframes = (0, external_styled_components_namespaceObject.keyframes)`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const Dot = external_styled_components_default().span`
  display: block;
  animation-duration: 0.6s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  transform-origin: center;
  animation-name: ${fadeKeyframes};
  width: 8px;
  height: 8px;
  background: ${(props)=>props.theme.color.backgroundDefault};
  border-radius: 50%;
`;
const DotsWrap = external_styled_components_default().span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  height: 8px;
  width: 40px;

  ${Dot}:nth-child(1) {
    animation-delay: -0.3s;
  }
  ${Dot}:nth-child(3) {
    animation-delay: 0.3s;
  }

  ${Dot} {
    ${({ theme, isDark })=>isDark && (0, external_styled_components_namespaceObject.css)`
        background: ${theme.color.backgroundGrayDefault};
      `}
  }
`;
exports.Dot = __webpack_exports__.Dot;
exports.DotsWrap = __webpack_exports__.DotsWrap;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Dot",
    "DotsWrap"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
