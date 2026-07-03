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
    default: ()=>Subscript_16
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
const SvgSubscript16 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 16,
        fill: "none",
        viewBox: "0 0 16 16"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        d: "M1.899 12C1.384 12 1 11.673 1 11.233c0-.174.066-.347.186-.51L4.475 6.5 1.252 2.298a.87.87 0 0 1-.197-.541c0-.43.405-.757.932-.757.328 0 .515.102.723.378l2.817 3.793h.044l2.752-3.752C8.542 1.123 8.75 1 9.057 1c.537 0 .943.327.943.757a.85.85 0 0 1-.186.52L6.558 6.429l3.212 4.264c.131.184.197.357.197.531 0 .44-.395.777-.91.777-.307 0-.559-.113-.723-.348L5.505 7.768h-.043l-2.85 3.884a.83.83 0 0 1-.713.348M11.68 15c-.474 0-.68-.312-.68-.74 0-.316.123-.559.398-.83l1.362-1.375c.556-.563.713-.818.713-1.166 0-.368-.24-.623-.593-.623-.26 0-.44.142-.624.457-.193.332-.367.454-.645.454-.37 0-.597-.255-.597-.668q-.001-.199.065-.38C11.339 9.433 12.036 9 12.9 9c1.205 0 1.973.716 1.973 1.776 0 .785-.343 1.194-1.111 1.979l-.903.918v.032h1.572c.363 0 .569.255.569.648 0 .384-.206.647-.57.647z"
    }));
const Subscript_16 = SvgSubscript16;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
