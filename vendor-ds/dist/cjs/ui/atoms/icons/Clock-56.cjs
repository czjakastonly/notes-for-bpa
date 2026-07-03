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
    default: ()=>Clock_56
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
const SvgClock56 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 56,
        height: 40,
        fill: "none",
        viewBox: "0 0 56 40"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#BFC1C6",
        fillRule: "evenodd",
        d: "M20.276 35.052c-7.9-4.68-10.51-14.877-5.83-22.776 4.679-7.9 14.876-10.51 22.775-5.83a.75.75 0 0 1-.764 1.29C29.27 3.479 19.993 5.854 15.736 13.04c-4.257 7.187-1.882 16.464 5.304 20.721 5.894 3.491 13.196 2.523 17.98-1.905a.75.75 0 0 1 1.019 1.1c-5.258 4.867-13.283 5.934-19.763 2.096",
        clipRule: "evenodd"
    }), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#BFC1C6",
        fillRule: "evenodd",
        d: "M28.5 19.073a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m-3.25 1.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0",
        clipRule: "evenodd"
    }), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#BFC1C6",
        fillRule: "evenodd",
        d: "M28 11.573a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75M27.488 21.753a.75.75 0 0 1 .082 1.058l-6 7a.75.75 0 0 1-1.14-.977l6-7a.75.75 0 0 1 1.058-.08M40.595 19.776a.75.75 0 0 1-.75.75h-4.116a.75.75 0 1 1 0-1.5h4.116a.75.75 0 0 1 .75.75M40.595 27.26a.75.75 0 0 1-.75.75h-4.116a.75.75 0 1 1 0-1.5h4.116a.75.75 0 0 1 .75.75",
        clipRule: "evenodd"
    }), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#BFC1C6",
        fillRule: "evenodd",
        d: "M40.311 19.133a.75.75 0 0 1 .257 1.029l-4.49 7.483a.75.75 0 1 1-1.286-.771l4.49-7.484a.75.75 0 0 1 1.03-.257M45.316 9.57a.75.75 0 0 1-.75.75h-3.16a.75.75 0 0 1 0-1.5h3.16a.75.75 0 0 1 .75.75M45.316 15.316a.75.75 0 0 1-.75.75h-3.16a.75.75 0 0 1 0-1.5h3.16a.75.75 0 0 1 .75.75",
        clipRule: "evenodd"
    }), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#BFC1C6",
        fillRule: "evenodd",
        d: "M45.013 8.928a.75.75 0 0 1 .257 1.029l-3.447 5.745a.75.75 0 1 1-1.286-.772l3.447-5.745a.75.75 0 0 1 1.03-.257",
        clipRule: "evenodd"
    }));
const Clock_56 = SvgClock56;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
