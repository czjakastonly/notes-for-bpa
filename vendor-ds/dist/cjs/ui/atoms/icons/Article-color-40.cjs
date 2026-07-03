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
    default: ()=>Article_color_40
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
const SvgArticleColor40 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 40,
        height: 40,
        fill: "none",
        viewBox: "0 0 40 40"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#D26AA0",
        fillRule: "evenodd",
        d: "M7.023 8.023a1 1 0 0 1 1-1h18.973a1 1 0 0 1 1 1v24.078c0 .35.06.687.17 1H10.024a3 3 0 0 1-3-3V8.023m-2 5.02v-5.02a3 3 0 0 1 3-3h18.973a3 3 0 0 1 3 3v14.868h5.743v8.21a4 4 0 0 1-4 4H10.023a5 5 0 0 1-5-5V13.043M31.55 33.1h.19a2 2 0 0 0 2-2v-6.21h-3.743v7.21a1 1 0 0 0 .998 1h.555m-19.144-20.42a1 1 0 1 0 0 2h10.21a1 1 0 0 0 0-2zm-1 7.381a1 1 0 0 1 1-1h10.21a1 1 0 0 1 0 2h-10.21a1 1 0 0 1-1-1m0 6.381a1 1 0 0 1 1-1h10.21a1 1 0 0 1 0 2h-10.21a1 1 0 0 1-1-1",
        clipRule: "evenodd"
    }));
const Article_color_40 = SvgArticleColor40;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
