"use strict";
var __webpack_require__ = {};
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
    default: ()=>Customize_16
});
const external_react_namespaceObject = require("react");
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if ("function" == typeof Object.getOwnPropertySymbols) ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
const SvgCustomize16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M2.75 1.25a.75.75 0 0 1 .743.648L3.5 2v.354a2.751 2.751 0 0 1 0 5.292V14a.75.75 0 0 1-1.493.102L2 14V7.647a2.751 2.751 0 0 1 0-5.294V2a.75.75 0 0 1 .75-.75m5.25 0a.75.75 0 0 1 .743.648L8.75 2v6.353a2.751 2.751 0 0 1 0 5.294V14a.75.75 0 0 1-1.493.102L7.25 14v-.354a2.751 2.751 0 0 1 0-5.292V2A.75.75 0 0 1 8 1.25m5.25 0a.75.75 0 0 1 .743.648L14 2v2.353a2.751 2.751 0 0 1 0 5.294V14a.75.75 0 0 1-1.493.102L12.5 14V9.646a2.751 2.751 0 0 1 0-5.292V2a.75.75 0 0 1 .75-.75M8 9.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m5.25-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-10.5-2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5",
        clipRule: "evenodd"
    }));
const Customize_16 = SvgCustomize16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
