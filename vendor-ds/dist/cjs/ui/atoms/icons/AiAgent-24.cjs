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
    default: ()=>AiAgent_24
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
const SvgAiAgent24 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#706D84",
        d: "M12 1a2 2 0 0 1 .735 3.857A1 1 0 0 1 12.75 5v2.25H17A4.75 4.75 0 0 1 21.75 12v6A4.75 4.75 0 0 1 17 22.75H7A4.75 4.75 0 0 1 2.25 18v-6A4.75 4.75 0 0 1 7 7.25h4.25V5q0-.073.014-.143A1.998 1.998 0 0 1 12 1M7 8.75A3.25 3.25 0 0 0 3.75 12v6A3.25 3.25 0 0 0 7 21.25h10A3.25 3.25 0 0 0 20.25 18v-6A3.25 3.25 0 0 0 17 8.75zm2 4.5a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V14a.75.75 0 0 1 .75-.75m6 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V14a.75.75 0 0 1 .75-.75"
    }));
const AiAgent_24 = SvgAiAgent24;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
