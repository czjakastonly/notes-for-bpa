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
    default: ()=>MoveTo_16
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
const SvgMoveTo16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 17,
        height: 17,
        fill: "none",
        viewBox: "0 0 17 17"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M4.47 16.015a.75.75 0 0 1-.22-.53V14a.75.75 0 0 1 1.5 0v.735h.75a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.53-.22M5 0h1.485a.75.75 0 1 1 0 1.5H5.75v.75a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 5 0m9.75 14.735V14a.75.75 0 0 1 1.5 0v1.485a.75.75 0 0 1-.75.75H14a.75.75 0 0 1 0-1.5zm0-13.235h-.735a.75.75 0 0 1 0-1.5H15.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0zm-14 6h8.19L7.22 5.78a.75.75 0 0 1 1.06-1.06l3 3a.747.747 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06L8.94 9H.75a.75.75 0 0 1 0-1.5M16.25 5v1.5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 1.5 0m0 4.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0M9.5 1.5a.75.75 0 0 1 0-1.5h1.485a.75.75 0 0 1 0 1.5zm0 14.75a.75.75 0 0 1 0-1.5h1.485a.75.75 0 0 1 0 1.5z",
        clipRule: "evenodd"
    }));
const MoveTo_16 = SvgMoveTo16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
