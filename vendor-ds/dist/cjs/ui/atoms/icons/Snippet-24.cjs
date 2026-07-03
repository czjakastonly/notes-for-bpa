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
    default: ()=>Snippet_24
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
const SvgSnippet24 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#706D84",
        d: "M2.95 14.367a.75.75 0 0 1 .75.75v4.03c0 .138.112.25.25.25h3.91a.75.75 0 0 1 0 1.5H3.95a1.75 1.75 0 0 1-1.75-1.75v-4.03a.75.75 0 0 1 .75-.75m18.052 0a.75.75 0 0 1 .75.75v4.028a1.75 1.75 0 0 1-1.572 1.742l-.178.008h-3.91a.75.75 0 0 1 0-1.5h3.91l.05-.004a.25.25 0 0 0 .2-.245v-4.03a.75.75 0 0 1 .75-.75m-4.51-1.184a.75.75 0 0 1 0 1.492l-.076.004H7.702a.75.75 0 0 1 0-1.5h8.714zm0-3.961a.75.75 0 0 1 0 1.492l-.076.004H7.702a.75.75 0 0 1 0-1.5h8.714zM7.86 3a.75.75 0 0 1 0 1.5H3.95a.25.25 0 0 0-.25.25v4.03a.75.75 0 0 1-1.5 0V4.75C2.2 3.784 2.984 3 3.95 3zm12.142 0c.966 0 1.75.784 1.75 1.75v4.03a.75.75 0 0 1-1.5 0V4.75a.25.25 0 0 0-.25-.25h-3.91a.75.75 0 0 1 0-1.5z"
    }));
const Snippet_24 = SvgSnippet24;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
