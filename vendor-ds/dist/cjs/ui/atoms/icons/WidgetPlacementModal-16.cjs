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
    default: ()=>WidgetPlacementModal_16
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
const SvgWidgetPlacementModal16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
    }, /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#FF809E",
        d: "M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v10a.5.5 0 0 0 .41.492L3 13.5h10a.5.5 0 0 0 .492-.41L13.5 13V3a.5.5 0 0 0-.41-.492z"
    }), /*#__PURE__*/ external_react_namespaceObject.createElement("rect", {
        width: 9,
        height: 7,
        x: 3.5,
        y: 4.5,
        fill: "#E0045F",
        fillOpacity: 0.25,
        rx: 0.5
    }), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#FF809E",
        fillRule: "nonzero",
        d: "M12 4.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5zM11 6H5v4h6z"
    })));
const WidgetPlacementModal_16 = SvgWidgetPlacementModal16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
