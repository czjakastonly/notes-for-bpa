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
    Toast: ()=>Toast
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const status_helpers_cjs_namespaceObject = require("../../utils/status.helpers.cjs");
const external_styled_components_namespaceObject = require("styled-components");
const external_BaseToast_styles_cjs_namespaceObject = require("./BaseToast.styles.cjs");
const external_BaseNotification_styles_cjs_namespaceObject = require("./BaseNotification.styles.cjs");
const Toast = ({ className, children, dataCy, severity = 'info', onCloseClick, onActionClick })=>{
    const theme = (0, external_styled_components_namespaceObject.useTheme)();
    return /*#__PURE__*/ external_react_default().createElement(external_BaseToast_styles_cjs_namespaceObject.BaseToast.Container, {
        className: className,
        $statusColor: (0, status_helpers_cjs_namespaceObject.resolveMainColorForStatus)(theme, severity)
    }, /*#__PURE__*/ external_react_default().createElement(external_BaseToast_styles_cjs_namespaceObject.BaseToast.IconContainer, null, (0, status_helpers_cjs_namespaceObject.renderStatusIconForStatus)(severity)), /*#__PURE__*/ external_react_default().createElement(external_BaseToast_styles_cjs_namespaceObject.BaseToast.Content, {
        "data-cy": dataCy
    }, children), onActionClick && /*#__PURE__*/ external_react_default().createElement(external_BaseToast_styles_cjs_namespaceObject.BaseToast.ActionButton, {
        onClick: onActionClick
    }, "action"), onCloseClick && /*#__PURE__*/ external_react_default().createElement(external_BaseNotification_styles_cjs_namespaceObject.BaseNotification.CloseIconContainer, null, /*#__PURE__*/ external_react_default().createElement(external_BaseToast_styles_cjs_namespaceObject.BaseToast.StyledCloseSVG, {
        onClick: onCloseClick
    })));
};
exports.Toast = __webpack_exports__.Toast;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Toast"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
