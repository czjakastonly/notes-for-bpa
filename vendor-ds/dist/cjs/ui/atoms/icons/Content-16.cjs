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
    default: ()=>Content_16
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
const SvgContent16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M1.256 4.122A1.25 1.25 0 0 1 2.5 3h8l.128.006A1.25 1.25 0 0 1 11.75 4.25v10.5l-.007.128A1.25 1.25 0 0 1 10.5 16h-8l-.128-.007A1.25 1.25 0 0 1 1.25 14.75V4.25zm8.994.378h-7.5v10h7.5zM4.256 1.122A1.25 1.25 0 0 1 5.5 0h8l.128.006A1.25 1.25 0 0 1 14.75 1.25v10.5l-.007.128A1.25 1.25 0 0 1 13.5 13h-.25l-.102-.007a.75.75 0 0 1-.648-.743l.007-.102a.75.75 0 0 1 .641-.641l.102-.007v-10h-7.5l-.007.102A.75.75 0 0 1 4.25 1.5v-.25zM8.5 6.75a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5zm0 4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5z",
        clipRule: "evenodd"
    }));
const Content_16 = SvgContent16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
