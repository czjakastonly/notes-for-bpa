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
    default: ()=>DocumentsStack_16
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
const SvgDocumentsStack16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 14,
        height: 16,
        fill: "none",
        viewBox: "0 0 14 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        d: "M6 7.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 6 7.25M6.75 9a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
    }), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M4.5 0a1.75 1.75 0 0 0-1.75 1.75v10c0 .966.784 1.75 1.75 1.75H12a1.75 1.75 0 0 0 1.75-1.75V4.06a1.75 1.75 0 0 0-.537-1.261L10.81.489A1.75 1.75 0 0 0 9.597 0zm0 1.5a.25.25 0 0 0-.25.25v10c0 .138.112.25.25.25H12a.25.25 0 0 0 .25-.25V5H10.5a1.75 1.75 0 0 1-1.75-1.75V1.5zm5.75.53v1.22c0 .138.112.25.25.25h1.278z",
        clipRule: "evenodd"
    }), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        d: "M1 3a.75.75 0 0 1 .75.75v9.5c0 .69.56 1.25 1.25 1.25h7a.75.75 0 0 1 0 1.5H3a2.75 2.75 0 0 1-2.75-2.75v-9.5A.75.75 0 0 1 1 3"
    }));
const DocumentsStack_16 = SvgDocumentsStack16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
