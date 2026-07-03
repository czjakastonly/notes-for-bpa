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
    default: ()=>Star_16
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
const SvgStar16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M7.855.378a1.23 1.23 0 0 0-.956.66L5.132 4.54l-3.345.331c-.463.039-.87.35-1.033.798l-.041.135c-.097.41.024.846.328 1.148l2.782 2.755-1.03 3.741c-.125.473.036.968.41 1.271l.117.084c.36.229.818.255 1.205.06l3.466-1.717 3.476 1.721c.427.215.944.158 1.318-.145l.106-.097c.297-.306.417-.749.305-1.168l-1.032-3.748 2.78-2.755a1.22 1.22 0 0 0 .288-1.283l-.05-.118a1.22 1.22 0 0 0-.995-.68l-3.334-.331-1.767-3.499A1.23 1.23 0 0 0 7.992.37zM7.99 2.2l1.708 3.384.056.093a.75.75 0 0 0 .54.315l3.17.314-2.668 2.645-.075.087a.75.75 0 0 0-.12.645l.982 3.566-3.26-1.614-.107-.043a.75.75 0 0 0-.558.043l-3.255 1.611.982-3.565.022-.113a.75.75 0 0 0-.217-.62L2.52 6.306l3.171-.314a.75.75 0 0 0 .596-.409z",
        clipRule: "evenodd"
    }));
const Star_16 = SvgStar16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
