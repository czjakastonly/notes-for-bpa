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
    default: ()=>WidgetPlacementSheet_16
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
const SvgWidgetPlacementSheet16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#E0045F",
        fillOpacity: 0.25,
        d: "M3.378 10.5a.5.5 0 0 1 .5-.5h8.244a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H3.878a.5.5 0 0 1-.5-.5z"
    }), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#FF809E",
        fillRule: "evenodd",
        d: "M11.834 2.834H4.167v10.333h7.667zm1.5-.167c0-.737-.637-1.333-1.423-1.333H4.09c-.785 0-1.422.596-1.422 1.333v10.667c0 .736.637 1.333 1.422 1.333h7.822c.786 0 1.423-.597 1.423-1.333z",
        clipRule: "evenodd"
    }), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#FF809E",
        fillRule: "evenodd",
        d: "M12.622 10.75H3.378v-1.5h9.244z",
        clipRule: "evenodd"
    }));
const WidgetPlacementSheet_16 = SvgWidgetPlacementSheet16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
