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
    default: ()=>Folder_24
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
const SvgFolder24 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#706D84",
        d: "M11.492 2.317a2.25 2.25 0 0 1 1.79 1.101l.479.811.055.082a.75.75 0 0 0 .59.287H22c.966 0 1.75.783 1.75 1.75v10.34a1.75 1.75 0 0 1-1.75 1.75H6a1.75 1.75 0 0 1-1.75-1.75V4.063c0-.967.784-1.75 1.75-1.75h5.344zM6 3.812a.25.25 0 0 0-.25.25v12.625c0 .139.112.25.25.25h16a.25.25 0 0 0 .25-.25V6.348a.25.25 0 0 0-.25-.25h-7.594a2.25 2.25 0 0 1-1.857-.98l-.08-.125-.48-.811a.75.75 0 0 0-.547-.362l-.098-.006z"
    }), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#706D84",
        d: "M.95 19.025V6.4a.75.75 0 0 1 1.496-.077l.004.077v12.625c0 .69.56 1.25 1.25 1.25h16a.75.75 0 0 1 0 1.5h-16a2.75 2.75 0 0 1-2.75-2.75"
    }));
const Folder_24 = SvgFolder24;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
