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
    default: ()=>Help_16
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
const SvgHelp16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1.4a6.6 6.6 0 1 0 0 13.2A6.6 6.6 0 0 0 8 1.4m0 9.108c.455 0 .83.339.89.777l.008.122-.008.121a.899.899 0 1 1-.89-1.02m.182-6.415.181.012c1.302.128 2.26 1.3 2.06 2.554-.095.604-.393 1.069-.835 1.45-.08.069-.206.163-.317.244l-.23.162c-.252.215-.34.35-.34.593a.7.7 0 1 1-1.4 0c0-.745.298-1.202.83-1.657l.543-.403c.21-.18.329-.366.367-.61.07-.438-.298-.889-.815-.94-.622-.06-1.148.254-1.26.823l-.018.136a.7.7 0 1 1-1.396-.107c.111-1.45 1.309-2.304 2.63-2.257",
        clipRule: "evenodd"
    }));
const Help_16 = SvgHelp16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
