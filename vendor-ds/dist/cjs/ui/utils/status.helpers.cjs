"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.n = (module)=>{
        var getter = module && module.__esModule ? ()=>module['default'] : ()=>module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
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
    renderStatusIconForStatus: ()=>renderStatusIconForStatus,
    STATUS_ICON_CLASS_NAME: ()=>STATUS_ICON_CLASS_NAME,
    resolveBackColorForStatus: ()=>resolveBackColorForStatus,
    resolveMainColorForStatus: ()=>resolveMainColorForStatus
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const Tick_16_cjs_namespaceObject = require("../atoms/icons/Tick-16.cjs");
var Tick_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(Tick_16_cjs_namespaceObject);
const Tip_16_cjs_namespaceObject = require("../atoms/icons/Tip-16.cjs");
var Tip_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(Tip_16_cjs_namespaceObject);
const Warning_16_cjs_namespaceObject = require("../atoms/icons/Warning-16.cjs");
var Warning_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(Warning_16_cjs_namespaceObject);
const Error_16_cjs_namespaceObject = require("../atoms/icons/Error-16.cjs");
var Error_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(Error_16_cjs_namespaceObject);
const Tick_24_cjs_namespaceObject = require("../atoms/icons/Tick-24.cjs");
var Tick_24_cjs_default = /*#__PURE__*/ __webpack_require__.n(Tick_24_cjs_namespaceObject);
const Tip_24_cjs_namespaceObject = require("../atoms/icons/Tip-24.cjs");
var Tip_24_cjs_default = /*#__PURE__*/ __webpack_require__.n(Tip_24_cjs_namespaceObject);
const Warning_24_cjs_namespaceObject = require("../atoms/icons/Warning-24.cjs");
var Warning_24_cjs_default = /*#__PURE__*/ __webpack_require__.n(Warning_24_cjs_namespaceObject);
const Error_24_cjs_namespaceObject = require("../atoms/icons/Error-24.cjs");
var Error_24_cjs_default = /*#__PURE__*/ __webpack_require__.n(Error_24_cjs_namespaceObject);
const external_constants_cjs_namespaceObject = require("../constants.cjs");
const STATUS_ICON_CLASS_NAME = 'ston-status-icon';
const resolveMainColorForStatus = (theme, status)=>{
    if ('error' === status) return theme.color.backgroundDanger;
    if ('success' === status) return theme.color.backgroundGreenDefault;
    if ('warning' === status) return theme.color.backgroundYellowDefault;
    if ('info' === status) return theme.color.backgroundBlueDefault;
};
const resolveBackColorForStatus = (theme, status)=>{
    if ('error' === status) return theme.color.backgroundDangerSubtle;
    if ('success' === status) return theme.color.backgroundGreenSubtlest;
    if ('warning' === status) return theme.color.backgroundWarningSubtle;
    if ('info' === status) return theme.color.backgroundBlueSubtlest;
};
const renderStatusIconForStatus = (status, iconSizeName)=>{
    if ('error' === status) {
        const Error = '24' === iconSizeName ? Error_24_cjs_default() : Error_16_cjs_default();
        return /*#__PURE__*/ external_react_default().createElement(Error, {
            "data-status": status,
            className: external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.statusIcon
        });
    }
    if ('warning' === status) {
        const Warning = '24' === iconSizeName ? Warning_24_cjs_default() : Warning_16_cjs_default();
        return /*#__PURE__*/ external_react_default().createElement(Warning, {
            "data-status": status,
            className: external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.statusIcon
        });
    }
    if ('success' === status) {
        const Tick = '24' === iconSizeName ? Tick_24_cjs_default() : Tick_16_cjs_default();
        return /*#__PURE__*/ external_react_default().createElement(Tick, {
            "data-status": status,
            className: external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.statusIcon
        });
    }
    if ('info' === status) {
        const Tip = '24' === iconSizeName ? Tip_24_cjs_default() : Tip_16_cjs_default();
        return /*#__PURE__*/ external_react_default().createElement(Tip, {
            "data-status": status,
            className: external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.statusIcon
        });
    }
    return null;
};
exports.STATUS_ICON_CLASS_NAME = __webpack_exports__.STATUS_ICON_CLASS_NAME;
exports.renderStatusIconForStatus = __webpack_exports__.renderStatusIconForStatus;
exports.resolveBackColorForStatus = __webpack_exports__.resolveBackColorForStatus;
exports.resolveMainColorForStatus = __webpack_exports__.resolveMainColorForStatus;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "STATUS_ICON_CLASS_NAME",
    "renderStatusIconForStatus",
    "resolveBackColorForStatus",
    "resolveMainColorForStatus"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
