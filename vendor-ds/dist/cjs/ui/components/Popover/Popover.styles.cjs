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
    Container: ()=>Container
});
const external_framer_motion_namespaceObject = require("framer-motion");
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const Container = external_styled_components_default()(external_framer_motion_namespaceObject.motion.div).attrs(({ placement = 'bottom', isReducedMotion = false })=>({
        initial: {
            opacity: 0,
            pointerEvents: 'none',
            transform: isReducedMotion ? 'none' : `translate3d(0, ${placement.includes('bottom') ? '-' : ''}10px, 0)`
        },
        animate: {
            opacity: 1,
            pointerEvents: 'auto',
            transform: isReducedMotion ? 'none' : 'translate3d(0, 0px, 0)'
        },
        exit: {
            opacity: 0,
            transform: isReducedMotion ? 'none' : `translate3d(0, ${placement.includes('bottom') ? '-' : ''}10px, 0)`,
            pointerEvents: 'none'
        },
        transition: {
            duration: 0.25
        }
    }))`
  box-shadow: ${({ theme })=>theme.shadows.medium};
  background-color: ${({ theme })=>theme.color.backgroundDefault};
  border-radius: 4px;
  position: relative;
  display: block;
  overflow: auto;
  ${({ theme })=>theme.scrollbars.basic};
`;
exports.Container = __webpack_exports__.Container;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Container"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
