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
    default: ()=>Snippet_32
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
const SvgSnippet32 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 32,
        height: 32,
        fill: "none",
        viewBox: "0 0 32 32"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#706D84",
        d: "M4 19.635a1 1 0 0 1 1 1v4.244h2.67a1 1 0 0 1 0 2H5l-.204-.01A2 2 0 0 1 3 24.878v-4.244a1 1 0 0 1 1-1m14.262 5.249a1 1 0 0 1 0 1.99l-.103.005h-4.195a1 1 0 0 1 0-2h4.195zm9.64-5.25a1 1 0 0 1 1 1v4.245a2 2 0 0 1-2 2h-2.67a1 1 0 0 1 0-2h2.67v-4.244a1 1 0 0 1 1-1m-5.97-1.568a1 1 0 0 1 0 1.99l-.102.005H10.293a1 1 0 0 1 0-2H21.83zm0-5.244a1 1 0 0 1 0 1.99l-.102.005H10.293a1 1 0 0 1 0-2H21.83zM7.67 6a1 1 0 0 1 0 2H5v4.244a1 1 0 0 1-2 0V8a2 2 0 0 1 2-2zm19.231 0a2 2 0 0 1 2 2v4.244a1 1 0 0 1-2 0V8h-2.67a1 1 0 0 1 0-2zm-8.64.005a1 1 0 0 1 0 1.99L18.159 8h-4.195a1 1 0 1 1 0-2h4.195z"
    }));
const Snippet_32 = SvgSnippet32;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
