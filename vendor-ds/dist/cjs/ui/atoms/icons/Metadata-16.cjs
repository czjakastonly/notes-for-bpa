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
    default: ()=>Metadata_16
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
const SvgMetadata16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#848296",
        d: "M13.834 11.007a.75.75 0 0 1 .702 1.325l-6.25 3.303a1.75 1.75 0 0 1-1.636 0L.4 12.333a.75.75 0 0 1 .7-1.325l6.25 3.303a.25.25 0 0 0 .234 0zm0-3a.75.75 0 0 1 .702 1.325l-6.25 3.303a1.75 1.75 0 0 1-1.636 0L.4 9.333a.75.75 0 0 1 .7-1.325l6.25 3.303a.25.25 0 0 0 .234 0zM6.65.203a1.75 1.75 0 0 1 1.635 0l5.638 2.98c1.243.656 1.243 2.437 0 3.094l-5.638 2.98a1.75 1.75 0 0 1-1.635 0l-5.638-2.98c-1.243-.657-1.243-2.438 0-3.095zm.935 1.326a.25.25 0 0 0-.235 0l-5.637 2.98a.25.25 0 0 0 0 .442L7.35 7.93a.25.25 0 0 0 .235 0l5.638-2.98a.25.25 0 0 0 0-.442z"
    }));
const Metadata_16 = SvgMetadata16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
