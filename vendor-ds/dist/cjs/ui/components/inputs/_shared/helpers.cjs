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
    renderMessageStatusIconForInputStatus: ()=>renderMessageStatusIconForInputStatus,
    renderStatusIconForInputStatus: ()=>renderStatusIconForInputStatus,
    resolveMessageColorForInputStatus: ()=>resolveMessageColorForInputStatus,
    resolveBorderColorForInputStatus: ()=>resolveBorderColorForInputStatus,
    resolveIconColorForInputStatus: ()=>resolveIconColorForInputStatus
});
const status_helpers_cjs_namespaceObject = require("../../../utils/status.helpers.cjs");
const resolveIconColorForInputStatus = (theme, status)=>{
    if ('error' === status) return theme.color.iconDanger;
    if ('success' === status) return theme.color.iconSuccess;
    if ('warning' === status) return theme.color.iconWarning;
};
const resolveMessageColorForInputStatus = (theme, status)=>{
    if ('error' === status) return theme.color.textDanger;
    if ('success' === status) return theme.color.textSuccess;
    if ('warning' === status) return theme.color.textWarning;
    if ('info' === status) return theme.color.textSubtle;
};
const resolveBorderColorForInputStatus = (theme, status)=>{
    if ('error' === status) return theme.color.borderDanger;
    if ('success' === status) return theme.color.borderSuccess;
    if ('warning' === status) return theme.color.textWarning;
};
const renderStatusIconForInputStatus = (status, iconSizeName)=>{
    if ('success' === status) return (0, status_helpers_cjs_namespaceObject.renderStatusIconForStatus)(status, iconSizeName);
    return null;
};
const renderMessageStatusIconForInputStatus = (status, iconSizeName)=>{
    if ('success' === status) return null;
    if ('info' === status) return null;
    return (0, status_helpers_cjs_namespaceObject.renderStatusIconForStatus)(status, iconSizeName);
};
exports.renderMessageStatusIconForInputStatus = __webpack_exports__.renderMessageStatusIconForInputStatus;
exports.renderStatusIconForInputStatus = __webpack_exports__.renderStatusIconForInputStatus;
exports.resolveBorderColorForInputStatus = __webpack_exports__.resolveBorderColorForInputStatus;
exports.resolveIconColorForInputStatus = __webpack_exports__.resolveIconColorForInputStatus;
exports.resolveMessageColorForInputStatus = __webpack_exports__.resolveMessageColorForInputStatus;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "renderMessageStatusIconForInputStatus",
    "renderStatusIconForInputStatus",
    "resolveBorderColorForInputStatus",
    "resolveIconColorForInputStatus",
    "resolveMessageColorForInputStatus"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
