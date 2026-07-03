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
    default: ()=>Layers_24
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
const SvgLayers24 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 20,
        fill: "none",
        viewBox: "0 0 20 20"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M16.15 12.546a.626.626 0 0 1 .843-.268l.875.453a1.053 1.053 0 0 1 .1 1.811l-.1.06-7.09 3.667c-.444.229-.964.25-1.422.062l-.135-.062L2.13 14.6a1.053 1.053 0 0 1 0-1.87l.874-.452a.625.625 0 1 1 .574 1.11l-.535.277 6.75 3.492a.45.45 0 0 0 .331.032l.08-.032 6.75-3.492-.537-.277a.626.626 0 0 1-.268-.843m0-3.666a.626.626 0 0 1 .843-.268l.875.453a1.053 1.053 0 0 1 .1 1.81l-.1.06-7.09 3.667c-.444.23-.964.25-1.422.063l-.135-.062-7.09-3.668a1.053 1.053 0 0 1 0-1.87l.874-.452a.625.625 0 1 1 .574 1.11L3.045 10l6.75 3.493a.45.45 0 0 0 .33.031l.08-.03 6.75-3.494-.537-.276a.626.626 0 0 1-.268-.843M9.222 1.752c.444-.23.964-.25 1.422-.063l.134.063 7.103 3.672a1.053 1.053 0 0 1 .088 1.808l-.1.059-7.09 3.664c-.445.23-.965.25-1.423.062l-.135-.063-7.09-3.667a1.053 1.053 0 0 1-.1-1.81l.1-.06zm.653 1.078-.08.032-6.751 3.49 6.75 3.492c.078.04.164.056.248.048l.083-.016.08-.032 6.754-3.49-6.754-3.492a.45.45 0 0 0-.33-.032",
        clipRule: "evenodd"
    }));
const Layers_24 = SvgLayers24;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
