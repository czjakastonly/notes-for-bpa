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
    Container: ()=>Container,
    Body: ()=>Body,
    AnimatePresence: ()=>external_framer_motion_namespaceObject.AnimatePresence
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const external_framer_motion_namespaceObject = require("framer-motion");
const Body = external_styled_components_default()(external_framer_motion_namespaceObject.motion.div)`
  position: relative;
  display: block;
  background-color: ${({ theme })=>theme.color.backgroundDefault};
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  ${(props)=>props.theme.scrollbars.basic};
`;
const Container = external_styled_components_default().div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
exports.AnimatePresence = __webpack_exports__.AnimatePresence;
exports.Body = __webpack_exports__.Body;
exports.Container = __webpack_exports__.Container;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "AnimatePresence",
    "Body",
    "Container"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
