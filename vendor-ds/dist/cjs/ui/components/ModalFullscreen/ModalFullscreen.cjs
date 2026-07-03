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
    ModalFullscreen: ()=>ModalFullscreen
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const index_cjs_namespaceObject = require("../../utils/Portal/index.cjs");
const external_constants_cjs_namespaceObject = require("../../constants.cjs");
const FocusLock_index_cjs_namespaceObject = require("../../utils/FocusLock/index.cjs");
const reducedMotion_cjs_namespaceObject = require("../../utils/reducedMotion.cjs");
var reducedMotion_cjs_default = /*#__PURE__*/ __webpack_require__.n(reducedMotion_cjs_namespaceObject);
const external_ModalFullscreen_styles_cjs_namespaceObject = require("./ModalFullscreen.styles.cjs");
const ModalFullscreen = /*#__PURE__*/ external_react_default().forwardRef(({ children }, forwardedRef)=>{
    const reduceMotion = reducedMotion_cjs_default()();
    return /*#__PURE__*/ external_react_default().createElement(external_ModalFullscreen_styles_cjs_namespaceObject.AnimatePresence, null, !!children && /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.Portal, null, /*#__PURE__*/ external_react_default().createElement(FocusLock_index_cjs_namespaceObject.FocusLock, null, /*#__PURE__*/ external_react_default().createElement(external_ModalFullscreen_styles_cjs_namespaceObject.Container, null, /*#__PURE__*/ external_react_default().createElement(external_ModalFullscreen_styles_cjs_namespaceObject.Body, {
        className: external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.modalFullscreen,
        "aria-modal": "true",
        role: "dialog",
        ref: forwardedRef,
        initial: {
            opacity: 0,
            scale: reduceMotion ? 1 : 1.05,
            pointerEvents: 'none'
        },
        animate: {
            opacity: 1,
            scale: 1,
            pointerEvents: 'all'
        },
        exit: {
            opacity: 0,
            scale: reduceMotion ? 1 : 1.05,
            pointerEvents: 'none'
        },
        transition: {
            type: 'spring'
        }
    }, children)))));
});
exports.ModalFullscreen = __webpack_exports__.ModalFullscreen;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ModalFullscreen"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
