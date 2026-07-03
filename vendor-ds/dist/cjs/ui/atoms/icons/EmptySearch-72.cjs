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
    default: ()=>EmptySearch_72
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
const SvgEmptySearch72 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 72,
        height: 72,
        fill: "none",
        viewBox: "0 0 72 72"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        d: "M57.446 58.86a8 8 0 1 1 1.288-1.54l3.974 3.973a1 1 0 0 1-1.415 1.414zM29 22h14a1 1 0 1 1 0 2H29a1 1 0 1 1 0-2m0 7h14a1 1 0 1 1 0 2H29a1 1 0 1 1 0-2m0 7h14a1 1 0 1 1 0 2H29a1 1 0 1 1 0-2m0 7h10a1 1 0 1 1 0 2H29a1 1 0 1 1 0-2m10 12a1 1 0 1 1 0 2H19a1 1 0 0 1-1-1V12a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v28a1 1 0 1 1-2 0V13H20v42zm7-2a6 6 0 1 0 12 0 6 6 0 0 0-12 0"
    }));
const EmptySearch_72 = SvgEmptySearch72;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
