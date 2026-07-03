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
    ContentWrapRefContext: ()=>ContentWrapRefContext,
    useContentWrapRef: ()=>useContentWrapRef
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const ContentWrapRefContext = /*#__PURE__*/ external_react_default().createContext(null);
const useContentWrapRef = ()=>{
    const contentWrapRef = (0, external_react_namespaceObject.useContext)(ContentWrapRefContext);
    if (!contentWrapRef) console.log('STON.WARNING - useContentWrapRef outside ContentWrapRefContext');
    return contentWrapRef;
};
exports.ContentWrapRefContext = __webpack_exports__.ContentWrapRefContext;
exports.useContentWrapRef = __webpack_exports__.useContentWrapRef;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ContentWrapRefContext",
    "useContentWrapRef"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
