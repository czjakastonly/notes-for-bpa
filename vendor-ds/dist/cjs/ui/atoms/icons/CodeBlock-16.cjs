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
    default: ()=>CodeBlock_16
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
const SvgCodeBlock16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#5D6169",
        fillRule: "evenodd",
        d: "M11.462 1.919a.75.75 0 1 0-1.461-.337L7.808 11.08a.75.75 0 1 0 1.462.338l2.192-9.5ZM2.724 2.5H4.52a.75.75 0 1 0 0-1.5H2.724C1.876 1 1 1.617 1 2.595V13.57c0 .978.876 1.594 1.724 1.594h10.717c.848 0 1.724-.616 1.724-1.594v-2.586a.75.75 0 1 0-1.5 0v2.584a.1.1 0 0 1-.026.032.3.3 0 0 1-.198.064H2.724a.3.3 0 0 1-.197-.064.1.1 0 0 1-.027-.032V2.596a.1.1 0 0 1 .027-.032.3.3 0 0 1 .197-.064m10.942 11.067v.002zm-11.167 0v.002zm0-10.968v-.003zm4.694 2.65a.75.75 0 1 0-.96-1.152L4.04 5.923a.75.75 0 0 0 0 1.153l2.192 1.826a.75.75 0 1 0 .96-1.152l-1.5-1.25zm4.789-1.056a.75.75 0 0 1 1.056-.096l2.192 1.826a.75.75 0 0 1 0 1.153l-2.192 1.826a.75.75 0 0 1-.96-1.152l1.5-1.25-1.5-1.251a.75.75 0 0 1-.096-1.056",
        clipRule: "evenodd"
    }));
const CodeBlock_16 = SvgCodeBlock16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
