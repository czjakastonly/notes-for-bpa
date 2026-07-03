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
    default: ()=>Language_16
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
const SvgLanguage16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M13.967 5.421 11.52 6.833c.919 1.699 1.562 3.388 1.852 4.827q.135-.2.257-.41a6.49 6.49 0 0 0 .338-5.829m-.749-1.3a6.5 6.5 0 0 0-1.968-1.75 6.47 6.47 0 0 0-3.81-.847c1.117.946 2.287 2.35 3.326 4.013zm-6.53 5.503c1.26 2.037 2.714 3.64 3.88 4.348a6.5 6.5 0 0 0 1.477-.882c-.038-1.363-.697-3.41-1.824-5.506zm-.746-1.302 3.524-2.034C8.17 4.23 6.685 2.633 5.518 1.992a6.5 6.5 0 0 0-1.32.735c-.039 1.328.6 3.428 1.744 5.595m-3.16 3.557a6.5 6.5 0 0 0 1.968 1.75c1.25.722 2.64.981 3.971.831-1.125-.972-2.297-2.402-3.333-4.086zm-.749-1.3 2.61-1.507C3.7 7.3 3.06 5.545 2.811 4.082q-.239.317-.441.668a6.49 6.49 0 0 0-.338 5.829M14.928 12A8 8 0 1 1 1.072 4a8 8 0 0 1 13.856 8",
        clipRule: "evenodd"
    }));
const Language_16 = SvgLanguage16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
