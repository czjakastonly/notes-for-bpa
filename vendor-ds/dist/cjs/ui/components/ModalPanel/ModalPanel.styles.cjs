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
    Backdrop: ()=>Backdrop,
    AnimatePresence: ()=>external_framer_motion_namespaceObject.AnimatePresence
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const external_framer_motion_namespaceObject = require("framer-motion");
const Backdrop = external_styled_components_default().div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: ${({ theme })=>theme.color.backgroundBrand};
  opacity: 0.6;
`;
const Body = external_styled_components_default()(external_framer_motion_namespaceObject.motion.div).attrs({
    initial: {
        x: '100%'
    },
    animate: {
        x: 0
    },
    exit: {
        x: '100%'
    },
    transition: {
        type: 'spring',
        stiffness: 500,
        mass: 1,
        damping: 47
    }
})`
  flex-direction: column;
  background-color: ${({ theme })=>theme.color.backgroundDefault};
  box-shadow: ${({ theme })=>theme.shadows.basic};
  overflow: auto;
  display: flex;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  will-change: width;
  right: 0;
  @media screen and (min-width: 620px) {
    width: 480px;
  }
`;
const Container = external_styled_components_default()(external_framer_motion_namespaceObject.motion.div).attrs({
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    },
    transition: {
        duration: 0.25
    }
})`
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
exports.Backdrop = __webpack_exports__.Backdrop;
exports.Body = __webpack_exports__.Body;
exports.Container = __webpack_exports__.Container;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "AnimatePresence",
    "Backdrop",
    "Body",
    "Container"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
