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
    default: ()=>AutomaticCheck_16
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
const SvgAutomaticCheck16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M11.97 4.03a5.616 5.616 0 0 1 .67 7.133v-.333a.75.75 0 0 0-1.5 0v2.266c0 .414.335.75.75.75h2.27a.75.75 0 0 0 0-1.5h-.527a7.115 7.115 0 0 0-7.309-11.26.75.75 0 0 0 .352 1.457A5.61 5.61 0 0 1 11.97 4.03M9.676 14.915a.75.75 0 1 0-.352-1.458 5.616 5.616 0 0 1-5.963-8.62v.33a.75.75 0 0 0 1.5 0V2.9a.75.75 0 0 0-.75-.75H1.84a.75.75 0 0 0 0 1.5h.53a7.115 7.115 0 0 0 7.306 11.265m1.48-8.55a.75.75 0 1 0-1.312-.73L7.942 9.062 6.624 7.084a.75.75 0 0 0-1.248.832l1.773 2.659a1 1 0 0 0 1.706-.07l2.3-4.14Z",
        clipRule: "evenodd"
    }));
const AutomaticCheck_16 = SvgAutomaticCheck16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
