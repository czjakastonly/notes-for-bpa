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
    default: ()=>History_16
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
const SvgHistory16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        d: "m2.637 3.394-.073-.823-.016-.104a.78.78 0 0 0-.833-.603.78.78 0 0 0-.712.843l.25 2.837.017.105a.78.78 0 0 0 .832.602l2.805-.243.105-.017a.78.78 0 0 0 .607-.826l-.016-.105a.78.78 0 0 0-.832-.602l-1.023.09-.023-.024a5.49 5.49 0 0 1 4.223-1.968c3.03 0 5.485 2.437 5.485 5.444s-2.456 5.444-5.485 5.444a5.49 5.49 0 0 1-4.752-2.722.787.787 0 0 0-1.07-.284.775.775 0 0 0-.287 1.063A7.06 7.06 0 0 0 7.948 15C11.843 15 15 11.866 15 8s-3.157-7-7.052-7a7.06 7.06 0 0 0-5.311 2.394"
    }), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        d: "M7.963 5.148c.397 0 .725.293.776.672l.008.106v2.038l2.035 1.897a.774.774 0 0 1 0 1.1.79.79 0 0 1-1.02.075l-.088-.075L7.41 8.837l-.057-.064-.06-.085-.035-.064-.037-.09-.033-.142-.007-.075-.002-2.392c0-.43.351-.778.784-.778"
    }));
const History_16 = SvgHistory16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
