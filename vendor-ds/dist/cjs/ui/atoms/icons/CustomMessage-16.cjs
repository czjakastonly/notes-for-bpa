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
    default: ()=>CustomMessage_16
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
const SvgCustomMessage16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("g", {
        clipPath: "url(#CustomMessage-16_svg__a)"
    }, /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        d: "M13.89.453a1.656 1.656 0 0 1 1.657 1.656v9.063l-.008.164a1.656 1.656 0 0 1-1.648 1.492H7.797l-3.425 2.569a.75.75 0 0 1-1.2-.6v-1.969H2.109a1.656 1.656 0 0 1-1.656-1.656V2.109A1.656 1.656 0 0 1 2.11.453zm-11.78 1.5a.156.156 0 0 0-.157.156v9.063a.156.156 0 0 0 .156.156h1.813a.75.75 0 0 1 .75.75v1.219l2.425-1.819.102-.064a.75.75 0 0 1 .348-.086h6.344a.156.156 0 0 0 .156-.156V2.109a.156.156 0 0 0-.156-.156zM5.28 5.664a.977.977 0 1 1 0 1.953.977.977 0 0 1 0-1.953m2.719 0a.977.977 0 1 1 0 1.953.977.977 0 0 1 0-1.953m2.719 0a.977.977 0 1 1 0 1.953.977.977 0 0 1 0-1.953"
    })), /*#__PURE__*/ external_react_namespaceObject.createElement("defs", null, /*#__PURE__*/ external_react_namespaceObject.createElement("clipPath", {
        id: "CustomMessage-16_svg__a"
    }, /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#fff",
        d: "M0 0h16v16H0z"
    }))));
const CustomMessage_16 = SvgCustomMessage16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
