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
    default: ()=>Article_color_24
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
const SvgArticleColor24 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#D26AA0",
        fillRule: "evenodd",
        d: "M4.5 4.75a.25.25 0 0 1 .25-.25h11.225c.136 0 .25.112.25.251v14.412H6.75a2.25 2.25 0 0 1-2.25-2.25V4.75M3 7.79V4.75C3 3.784 3.784 3 4.75 3h11.225c.967 0 1.75.786 1.75 1.751v8.331h3.306v3.831a3.75 3.75 0 0 1-3.531 3.744v.006q-.04 0-.08-.002l-.14.002H6.75A3.75 3.75 0 0 1 3 16.913V7.791m14.724 11.33a2.25 2.25 0 0 0 1.807-2.207v-2.331h-1.806v4.537M7.424 7.45a.75.75 0 1 0 0 1.5H13.3a.75.75 0 0 0 0-1.5zm-.75 4.25a.75.75 0 0 1 .75-.75H13.3a.75.75 0 0 1 0 1.5H7.423a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75H13.3a.75.75 0 0 1 0 1.5H7.423a.75.75 0 0 1-.75-.75",
        clipRule: "evenodd"
    }));
const Article_color_24 = SvgArticleColor24;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
