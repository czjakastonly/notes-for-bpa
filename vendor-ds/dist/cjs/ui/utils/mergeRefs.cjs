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
    mergeRefs: ()=>mergeRefs,
    useMergeRefs: ()=>useMergeRefs
});
const external_react_namespaceObject = require("react");
function setRef(ref, value) {
    if ('function' == typeof ref) ref(value);
    else if (null != ref) ref.current = value;
}
function mergeRefs(...refs) {
    return (node)=>refs.forEach((ref)=>setRef(ref, node));
}
function useMergeRefs(...refs) {
    return (0, external_react_namespaceObject.useCallback)(mergeRefs(...refs), refs);
}
exports.mergeRefs = __webpack_exports__.mergeRefs;
exports.useMergeRefs = __webpack_exports__.useMergeRefs;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "mergeRefs",
    "useMergeRefs"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
