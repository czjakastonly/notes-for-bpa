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
    default: ()=>WidgetPlacementBottomCorner_16
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
const SvgWidgetPlacementBottomCorner16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("g", {
        fill: "none",
        fillRule: "evenodd",
        transform: "translate(1 1)"
    }, /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#FF809E",
        d: "M12 0a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1.5H2a.5.5 0 0 0-.492.41L1.5 2v10a.5.5 0 0 0 .41.492L2 12.5h10a.5.5 0 0 0 .492-.41L12.5 12V2a.5.5 0 0 0-.41-.492z"
    }), /*#__PURE__*/ external_react_namespaceObject.createElement("rect", {
        width: 4,
        height: 5.5,
        x: 6.75,
        y: 5.25,
        fill: "#E0045F",
        fillOpacity: 0.25,
        rx: 0.5
    }), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#FF809E",
        fillRule: "nonzero",
        d: "M11 4.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H6.5A.5.5 0 0 1 6 11V5a.5.5 0 0 1 .5-.5zM10 6H7.5v4H10z"
    })));
const WidgetPlacementBottomCorner_16 = SvgWidgetPlacementBottomCorner16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
