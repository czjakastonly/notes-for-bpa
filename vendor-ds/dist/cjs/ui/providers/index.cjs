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
    useGetWasLastEventTypeKeyboard: ()=>index_cjs_namespaceObject.useGetWasLastEventTypeKeyboard,
    default: ()=>providers,
    LastEventProvider: ()=>index_cjs_namespaceObject.LastEventProvider,
    ImperativeModalWindowProvider: ()=>external_ImperativeModalWindowProvider_index_cjs_namespaceObject.ImperativeModalWindowProvider,
    Provider: ()=>Provider
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const index_cjs_namespaceObject = require("./LastEventProvider/index.cjs");
const external_ImperativeModalWindowProvider_index_cjs_namespaceObject = require("./ImperativeModalWindowProvider/index.cjs");
const Provider = ({ children })=>/*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.LastEventProvider, null, /*#__PURE__*/ external_react_default().createElement(external_ImperativeModalWindowProvider_index_cjs_namespaceObject.ImperativeModalWindowProvider, null, children));
const providers = Provider;
exports.ImperativeModalWindowProvider = __webpack_exports__.ImperativeModalWindowProvider;
exports.LastEventProvider = __webpack_exports__.LastEventProvider;
exports.Provider = __webpack_exports__.Provider;
exports["default"] = __webpack_exports__["default"];
exports.useGetWasLastEventTypeKeyboard = __webpack_exports__.useGetWasLastEventTypeKeyboard;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ImperativeModalWindowProvider",
    "LastEventProvider",
    "Provider",
    "default",
    "useGetWasLastEventTypeKeyboard"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
