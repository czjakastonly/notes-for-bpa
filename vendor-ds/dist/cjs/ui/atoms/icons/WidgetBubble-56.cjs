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
    default: ()=>WidgetBubble_56
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
const SvgWidgetBubble56 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 56,
        height: 40,
        fill: "none",
        viewBox: "0 0 56 40"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#D3D5DA",
        fillRule: "evenodd",
        d: "M28 2c9.94 0 18 8.06 18 18 0 2.877-.997 5.99-2.198 8.403l1.572 7.76a1.06 1.06 0 0 1-1.266 1.245l-7.523-1.662C34.175 36.944 30.875 38 28 38c-9.94 0-18-8.06-18-18S18.06 2 28 2m0 1.5c-9.112 0-16.5 7.388-16.5 16.5S18.888 36.5 28 36.5c2.373 0 5.388-.84 7.918-2.097a1.5 1.5 0 0 1 .99-.121l6.861 1.514-1.437-7.096a1.5 1.5 0 0 1 .128-.966c1.255-2.521 2.04-5.353 2.04-7.734 0-9.112-7.388-16.5-16.5-16.5m-5 15a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 23 18.5m5 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 28 18.5m5 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 33 18.5",
        clipRule: "evenodd"
    }));
const WidgetBubble_56 = SvgWidgetBubble56;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
