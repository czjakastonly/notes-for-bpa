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
    default: ()=>Iframe_16
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
const SvgIframe16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        d: "M13.956 1.509c.388.039.755.208 1.036.484.322.317.507.749.508 1.202V12.8a1.7 1.7 0 0 1-.509 1.205 1.73 1.73 0 0 1-1.208.495H2.15c-.433 0-.851-.17-1.162-.475a1.63 1.63 0 0 1-.488-1.16V3.2l.009-.169c.04-.392.217-.758.5-1.036A1.73 1.73 0 0 1 2.217 1.5h11.571zM2 12.865q-.001.05.04.091a.16.16 0 0 0 .11.044h11.628c.063 0 .121-.025.162-.065a.2.2 0 0 0 .06-.137V5.75H2zm3.55-5.764a.75.75 0 0 1 .9 1.199l-1.201.9 1.201.9a.75.75 0 0 1-.9 1.2l-2-1.5a.75.75 0 0 1 0-1.2zm3.85.149a.75.75 0 0 1 1.05-.15l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 0 1-.9-1.2l1.2-.9-1.2-.9a.75.75 0 0 1-.15-1.05M2.176 3.005a.23.23 0 0 0-.115.06c-.04.039-.06.09-.061.14V4.25h12V3.2l-.015-.072a.2.2 0 0 0-.044-.065.22.22 0 0 0-.113-.058L13.783 3H2.222z"
    }));
const Iframe_16 = SvgIframe16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
