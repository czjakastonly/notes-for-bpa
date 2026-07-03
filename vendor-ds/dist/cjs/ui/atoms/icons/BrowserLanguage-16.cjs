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
    default: ()=>BrowserLanguage_16
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
const SvgBrowserLanguage16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        d: "M11 6.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m-2.531 6.788q.109.135.233.26A3.25 3.25 0 0 0 11 14.25q.13 0 .257-.012a9.6 9.6 0 0 1-1.52-1.933zm2.133-1.233c.498.817 1.103 1.548 1.81 2.122q.218-.105.416-.242c-.143-.899-.473-1.788-.932-2.627zM12.978.759A1.695 1.695 0 0 1 14.5 2.44v2.998a.75.75 0 0 1-1.5 0V4.75H2.25v6.743l.015.074q.014.036.042.064a.2.2 0 0 0 .137.056H5a.75.75 0 0 1 0 1.5H2.44a1.696 1.696 0 0 1-1.69-1.689V2.436l.009-.167A1.69 1.69 0 0 1 2.436.75H12.81zm-.215 9.8c.4.726.716 1.493.914 2.284a3.23 3.23 0 0 0 .354-3.016zM8.38 9.076A3.24 3.24 0 0 0 7.75 11c0 .4.074.798.219 1.172l1.288-.744a13 13 0 0 1-.877-2.352m1.16-.98a3 3 0 0 0-.324.187c.195.895.498 1.799.908 2.644l1.249-.722a12 12 0 0 0-1.834-2.108M11 7.75q-.18 0-.356.02c.58.579 1.126 1.23 1.597 1.934l1.29-.743A3.25 3.25 0 0 0 11 7.75M2.367 2.265a.19.19 0 0 0-.117.174v.811H13v-.806a.2.2 0 0 0-.12-.18l-.074-.014H2.439z"
    }));
const BrowserLanguage_16 = SvgBrowserLanguage16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
