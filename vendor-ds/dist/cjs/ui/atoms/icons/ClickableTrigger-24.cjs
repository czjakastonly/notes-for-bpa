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
    default: ()=>ClickableTrigger_24
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
const SvgClickableTrigger24 = (props)=>/*#__PURE__*/ external_react_namespaceObject.createElement("svg", _object_spread({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
    }, props), /*#__PURE__*/ external_react_namespaceObject.createElement("path", {
        fill: "#515358",
        fillRule: "evenodd",
        d: "M4.38 3.296a1.37 1.37 0 0 0-.701.383c-.336.335-.492.852-.384 1.273.032.126 1.351 3.368 2.93 7.204 3.215 7.807 2.944 7.226 3.487 7.493.238.117.303.131.607.131.573 0 .644-.048 1.83-1.231l1.01-1.006 1.474 1.468c1.581 1.574 1.651 1.63 2.125 1.705.25.04.604-.013.842-.124.13-.06.558-.462 1.544-1.448s1.388-1.414 1.448-1.544c.111-.238.164-.592.124-.842-.075-.474-.131-.544-1.705-2.125l-1.468-1.474 1.006-1.01c1.183-1.186 1.231-1.257 1.231-1.83 0-.304-.014-.369-.131-.607-.267-.542.307-.275-7.434-3.462A1668 1668 0 0 0 5.14 3.347a1.44 1.44 0 0 0-.76-.051m7.22 4.303c3.641 1.5 6.628 2.736 6.638 2.746s-.523.562-1.186 1.227c-.662.664-1.225 1.249-1.25 1.3-.06.117-.062.434-.003.588.026.07.746.822 1.733 1.81l1.688 1.69-1.13 1.13-1.13 1.13-1.69-1.688c-.988-.987-1.74-1.707-1.81-1.733-.154-.059-.471-.057-.588.003-.051.025-.636.588-1.3 1.25-.665.663-1.217 1.196-1.227 1.186-.023-.022-5.466-13.229-5.496-13.334-.017-.061-.006-.072.055-.055.042.012 3.055 1.25 6.696 2.75"
    }));
const ClickableTrigger_24 = SvgClickableTrigger24;
exports["default"] = __webpack_exports__["default"];
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "default"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
