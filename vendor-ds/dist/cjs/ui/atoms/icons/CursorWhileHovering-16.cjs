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
    default: ()=>CursorWhileHovering_16
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
const SvgCursorWhileHovering16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("g", {
        clipPath: "url(#CursorWhileHovering-16_svg__a)"
    }, /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M5.865 4.338a1.17 1.17 0 0 0-1.527 1.526l3.53 8.573c.095.232.3.4.547.45l.342.068.342.068a.75.75 0 0 0 .677-.205l.956-.956 1.546 1.546.001.001a1.17 1.17 0 0 0 1.652 0l.001-.001 1.475-1.476a1.17 1.17 0 0 0 0-1.654l-1.545-1.546.956-.956a1.17 1.17 0 0 0-.382-1.908zm7.542 4.728-7.38-3.039 3.039 7.38 1.136-1.136a.75.75 0 0 1 1.06 0l1.843 1.842 1.008-1.008-1.842-1.842a.75.75 0 0 1 0-1.061zM12.04 1.423a.25.25 0 0 1 .248.252l-.021 2a.75.75 0 0 0 1.5.01l.021-2a1.75 1.75 0 0 0-1.737-1.762l-10-.07A1.75 1.75 0 0 0 .289 1.59l-.07 10a1.75 1.75 0 0 0 1.737 1.762l2 .021a.75.75 0 0 0 .01-1.5l-2-.021a.25.25 0 0 1-.248-.252l.071-10a.25.25 0 0 1 .252-.248l10 .071Z",
        clipRule: "evenodd"
    })), /*#__PURE__*/ external_react_namespaceObject.createElement("defs", null, /*#__PURE__*/ external_react_namespaceObject.createElement("clipPath", {
        id: "CursorWhileHovering-16_svg__a"
    }, /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#fff",
        d: "M0 0h16v16H0z"
    }))));
const CursorWhileHovering_16 = SvgCursorWhileHovering16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
