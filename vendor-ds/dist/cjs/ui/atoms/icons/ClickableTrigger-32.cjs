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
    default: ()=>ClickableTrigger_32
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
const SvgClickableTrigger32 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 32,
        height: 32,
        fill: "none"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M5.44 4.073c-.381.105-.608.235-.87.497-.468.467-.661 1.139-.498 1.726.158.568 7.545 18.447 7.726 18.698.354.494 1.057.808 1.665.746.624-.064.829-.214 2.27-1.658l1.306-1.308 1.947 1.944c2.249 2.245 2.246 2.242 3.041 2.242.789-.001.812-.017 2.864-2.069s2.069-2.076 2.069-2.864c0-.796.003-.792-2.242-3.041l-1.944-1.947 1.308-1.306c1.425-1.422 1.589-1.644 1.657-2.242.068-.608-.251-1.339-.74-1.689-.247-.178-18.206-7.596-18.7-7.725-.351-.092-.537-.092-.859-.004m9.387 5.607 8.69 3.581.184.076-1.606 1.611c-1.402 1.407-1.614 1.641-1.667 1.841a.9.9 0 0 0-.036.32c.014.05.04.163.06.251.026.118.619.745 2.271 2.401l2.237 2.24-1.481 1.48-1.48 1.479-2.186-2.19c-1.202-1.205-2.246-2.221-2.32-2.259a1.02 1.02 0 0 0-.714-.08c-.187.049-.454.292-1.831 1.664l-1.611 1.606-.085-.203c-.187-.446-7.08-17.186-7.122-17.296-.041-.106-.034-.113.072-.072.065.025 3.946 1.622 8.625 3.55"
    }));
const ClickableTrigger_32 = SvgClickableTrigger32;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
