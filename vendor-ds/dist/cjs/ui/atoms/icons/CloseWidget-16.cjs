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
    default: ()=>CloseWidget_16
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
const SvgCloseWidget16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M7.778 1.75a.75.75 0 0 1 .102 1.493l-.102.007H4.056c-.143 0-.27.113-.3.27l-.006.07v9.82c0 .169.109.302.246.333l.06.007h7.388c.143 0 .27-.113.3-.27l.006-.07V7.363a.75.75 0 0 1 1.493-.102l.007.102v6.045c0 .96-.724 1.758-1.657 1.835l-.149.006H4.056c-.953 0-1.725-.749-1.8-1.69l-.006-.15V3.59c0-.96.724-1.757 1.657-1.834l.149-.006zM11.196.147l.084.073 1.22 1.219 1.22-1.22a.75.75 0 0 1 1.133.977l-.073.084-1.219 1.22 1.22 1.22a.75.75 0 0 1-.977 1.133l-.084-.073-1.22-1.219-1.22 1.22a.75.75 0 0 1-1.133-.977l.073-.084 1.219-1.22-1.22-1.22a.75.75 0 0 1 .977-1.133",
        clipRule: "evenodd"
    }));
const CloseWidget_16 = SvgCloseWidget16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
