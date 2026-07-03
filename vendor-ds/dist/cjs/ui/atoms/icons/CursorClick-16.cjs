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
    default: ()=>CursorClick_16
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
const SvgCursorClick16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M7.25 1a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zM2.03.97A.75.75 0 0 0 .97 2.03l1.5 1.5a.75.75 0 0 0 1.06-1.06zM.25 6.5A.75.75 0 0 1 1 5.75h1.5a.75.75 0 0 1 0 1.5H1a.75.75 0 0 1-.75-.75m5.615-2.162a1.17 1.17 0 0 0-1.527 1.527l3.53 8.572c.095.232.3.4.547.45l.342.068.342.068a.75.75 0 0 0 .677-.205l.956-.956 1.546 1.546.001.001a1.17 1.17 0 0 0 1.652 0l.001-.001 1.475-1.476a1.17 1.17 0 0 0 0-1.654l-1.545-1.546.956-.956a1.17 1.17 0 0 0-.382-1.908zm7.542 4.728-7.38-3.039 3.039 7.38 1.136-1.136a.75.75 0 0 1 1.06 0l1.843 1.842 1.008-1.008-1.842-1.842a.75.75 0 0 1 0-1.061z",
        clipRule: "evenodd"
    }));
const CursorClick_16 = SvgCursorClick16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
