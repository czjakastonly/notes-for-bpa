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
    default: ()=>Pinned_16
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
const SvgPinned16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M9.744.76c.454-.05.907.086 1.257.372l.126.115 3.682 3.681a1.695 1.695 0 0 1-.15 2.53l-.139.099-3.687 2.347.033.294a5.5 5.5 0 0 1-.468 2.714l-.123.253-.135.248a1.694 1.694 0 0 1-2.533.456l-.129-.116-2.058-2.058-3.64 3.64a.749.749 0 0 1-1.133-.976l.073-.085 3.639-3.64-2.055-2.056a1.7 1.7 0 0 1-.498-1.24l.013-.174c.066-.522.37-.982.826-1.25a5.5 5.5 0 0 1 3.213-.725l.294.033 2.347-3.687c.214-.338.54-.585.913-.705l.164-.043zm.163 1.491-.056.015a.2.2 0 0 0-.063.044l-.024.03-2.618 4.115a.75.75 0 0 1-.808.326 4 4 0 0 0-2.936.428.2.2 0 0 0-.075.259l.037.049 5.176 5.176a.2.2 0 0 0 .162.055.2.2 0 0 0 .143-.092 4 4 0 0 0 .43-2.938.75.75 0 0 1 .24-.746l.086-.062 4.114-2.619a.2.2 0 0 0 .09-.143.2.2 0 0 0-.022-.112l-.035-.047-3.681-3.682a.2.2 0 0 0-.102-.053z",
        clipRule: "evenodd"
    }));
const Pinned_16 = SvgPinned16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
