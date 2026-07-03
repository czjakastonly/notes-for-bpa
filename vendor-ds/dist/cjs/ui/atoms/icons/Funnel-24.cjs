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
    default: ()=>Funnel_24
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
const SvgFunnel24 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#706D84",
        d: "M14.625 19.036v-6.945c0-.148.044-.293.126-.416l5.81-8.717.028-.048a.375.375 0 0 0-.339-.535H3.75c-.3 0-.478.334-.312.583l5.588 8.383H12.5l.076.004a.75.75 0 0 1 0 1.492l-.076.004H9.375v7.909l.012.095c.054.209.282.337.497.256l4.5-1.715.052-.025a.37.37 0 0 0 .184-.268zm1.494.145a1.88 1.88 0 0 1-1.068 1.55l-.134.057-4.5 1.714a1.875 1.875 0 0 1-2.538-1.63l-.004-.122v-8.433L2.19 3.79C1.36 2.544 2.253.875 3.75.875h16.5c1.45 0 2.334 1.566 1.633 2.797l-.073.118-5.685 8.527v6.72z"
    }));
const Funnel_24 = SvgFunnel24;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
