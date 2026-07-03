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
    default: ()=>Replace_16
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
const SvgReplace16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#848296",
        fillRule: "evenodd",
        d: "m10.479 2.871.04-.039.074-.055.099-.056.086-.034.082-.02.038-.007.11-.009h2.83a.75.75 0 0 1 .11 1.492l-.11.008h-1.085a6.251 6.251 0 0 1-5.108 10.093.75.75 0 1 1 .044-1.499 4.751 4.751 0 0 0 4.07-7.41v.895a.75.75 0 0 1-.64.742l-.11.008a.75.75 0 0 1-.742-.64l-.008-.11V3.4a.7.7 0 0 1 .016-.156l.022-.082.032-.08.038-.07.043-.063a1 1 0 0 1 .069-.079zM8.424 1.778a.75.75 0 0 1-.143 1.494 4.75 4.75 0 0 0-4.033 7.848v-1a.75.75 0 0 1 .64-.742l.11-.008a.75.75 0 0 1 .742.64l.008.11.002 2.808a.75.75 0 0 1-.41.69l-.011.004a.7.7 0 0 1-.35.077h-2.81a.75.75 0 0 1-.11-1.493l.11-.008H3.2a6.249 6.249 0 0 1 5.225-10.42",
        clipRule: "evenodd"
    }));
const Replace_16 = SvgReplace16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
