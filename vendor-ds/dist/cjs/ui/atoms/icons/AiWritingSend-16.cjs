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
    default: ()=>AiWritingSend_16
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
const SvgAiWritingSend16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("g", {
        clipPath: "url(#AiWritingSend-16_svg__a)"
    }, /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#848296",
        d: "M14.111.468c.233-.076.481-.086.72-.03.198.048.38.142.537.272a1 1 0 0 1 .155.15q.151.172.235.381l.055.175.03.18c.02.18 0 .364-.056.539v.005l-4.15 12.733v.006a1.797 1.797 0 0 1-2.805.848 1.8 1.8 0 0 1-.634-.962l-1.302-5.41-5.404-1.296-.032-.01a1.796 1.796 0 0 1-.982-2.757c.22-.314.535-.549.898-.67l.007-.004zM8.542 8.91l1.306 5.427a.1.1 0 0 0 .03.045.1.1 0 0 0 .054.02q.03 0 .054-.017a.1.1 0 0 0 .034-.046l3.335-10.242zM1.917 6.235a.1.1 0 0 0-.045.036.1.1 0 0 0-.017.053q.002.03.02.054.016.02.041.03l5.42 1.3 4.809-4.809z"
    })), /*#__PURE__*/ external_react_namespaceObject.createElement("defs", null, /*#__PURE__*/ external_react_namespaceObject.createElement("clipPath", {
        id: "AiWritingSend-16_svg__a"
    }, /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#fff",
        d: "M0 0h16v16H0z"
    }))));
const AiWritingSend_16 = SvgAiWritingSend16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
