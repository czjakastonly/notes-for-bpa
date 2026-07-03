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
    default: ()=>GuidedTour_16
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
const SvgGuidedTour16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M12.75 1.5a2.75 2.75 0 0 1 2.745 2.582l.005.168v7.5a2.75 2.75 0 0 1-2.582 2.745l-.168.005h-3a2.75 2.75 0 0 1-2.745-2.582L7 11.75v-7.5a2.75 2.75 0 0 1 2.582-2.745L9.75 1.5zm-9.554.614a.75.75 0 0 1-.322.932l-.092.044a1.25 1.25 0 0 0-.776 1.033L2 4.25v7.5c0 .471.263.894.668 1.107l.114.053a.75.75 0 0 1-.562 1.39 2.75 2.75 0 0 1-1.714-2.363L.5 11.75v-7.5A2.75 2.75 0 0 1 2.22 1.7a.75.75 0 0 1 .976.414m3.25 0a.75.75 0 0 1-.322.932l-.092.044a1.25 1.25 0 0 0-.776 1.033l-.006.127v7.5c0 .471.263.894.668 1.107l.114.053a.75.75 0 0 1-.562 1.39 2.75 2.75 0 0 1-1.714-2.363l-.006-.187v-7.5A2.75 2.75 0 0 1 5.47 1.7a.75.75 0 0 1 .976.414M12.75 3h-3a1.25 1.25 0 0 0-1.244 1.122L8.5 4.25v7.5c0 .647.492 1.18 1.122 1.243L9.75 13h3a1.25 1.25 0 0 0 1.243-1.122L14 11.75v-7.5a1.25 1.25 0 0 0-1.122-1.244z",
        clipRule: "evenodd"
    }));
const GuidedTour_16 = SvgGuidedTour16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
