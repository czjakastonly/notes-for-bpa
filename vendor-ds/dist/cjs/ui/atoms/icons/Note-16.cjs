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
    default: ()=>Note_16
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
const SvgNote16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M14.107 13.943c0 .007-.002.038-.05.08a.4.4 0 0 1-.255.084h-4.06A1 1 0 0 0 9.75 14v-4A.75.75 0 0 0 9 9.25H2a1 1 0 0 0-.107.008v-7.2c0-.008.002-.039.05-.08a.4.4 0 0 1 .255-.085h11.604a.4.4 0 0 1 .255.084c.048.042.05.073.05.08zM3.742 10.75l4.508 3.073V10.75zm10.06 4.857c.893 0 1.805-.648 1.805-1.664V2.057c0-1.016-.912-1.664-1.805-1.664H2.198C1.305.393.393 1.04.393 2.057V9.45a1.6 1.6 0 0 0 .636 1.266l6.56 4.472c.339.277.769.42 1.2.42zM3.25 4A.75.75 0 0 1 4 3.25h8a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 4M4 6.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z",
        clipRule: "evenodd"
    }));
const Note_16 = SvgNote16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
