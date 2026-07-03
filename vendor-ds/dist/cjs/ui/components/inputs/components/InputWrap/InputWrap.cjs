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
    InputWrap: ()=>InputWrap
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_constants_cjs_namespaceObject = require("../../../../constants.cjs");
const mergeClassNames_cjs_namespaceObject = require("../../../../utils/mergeClassNames.cjs");
const TooltipIcon_cjs_namespaceObject = require("../../../Tooltip/TooltipIcon.cjs");
const Help_16_cjs_namespaceObject = require("../../../../atoms/icons/Help-16.cjs");
var Help_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(Help_16_cjs_namespaceObject);
const helpers_cjs_namespaceObject = require("../../_shared/helpers.cjs");
const external_styled_components_namespaceObject = require("styled-components");
const external_InputWrap_styles_cjs_namespaceObject = require("./InputWrap.styles.cjs");
var external_InputWrap_styles_cjs_default = /*#__PURE__*/ __webpack_require__.n(external_InputWrap_styles_cjs_namespaceObject);
const InputWrap = ({ labelDomId, messageDomId, required, children, status, message, label, className, tooltip })=>{
    const theme = (0, external_styled_components_namespaceObject.useTheme)();
    const statusIcon = (0, helpers_cjs_namespaceObject.renderMessageStatusIconForInputStatus)(status);
    const statusIconColor = (0, helpers_cjs_namespaceObject.resolveIconColorForInputStatus)(theme, status);
    const statusMessageColor = (0, helpers_cjs_namespaceObject.resolveMessageColorForInputStatus)(theme, status);
    return /*#__PURE__*/ external_react_default().createElement(external_InputWrap_styles_cjs_default().InputContainer, {
        className: (0, mergeClassNames_cjs_namespaceObject.mergeClassNames)(className, external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.inputWrap),
        withMessageBelow: !!message
    }, label && /*#__PURE__*/ external_react_default().createElement(external_InputWrap_styles_cjs_default().InputLabel, null, /*#__PURE__*/ external_react_default().createElement("span", {
        id: labelDomId,
        className: external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.inputLabel
    }, label), required && label && /*#__PURE__*/ external_react_default().createElement(external_InputWrap_styles_cjs_default().InputRequiredLabelSuffix, {
        "aria-hidden": true
    }, "*"), tooltip && /*#__PURE__*/ external_react_default().createElement(TooltipIcon_cjs_namespaceObject.TooltipIcon, {
        as: Help_16_cjs_default()
    }, tooltip)), children, message && /*#__PURE__*/ external_react_default().createElement(external_InputWrap_styles_cjs_default().InputMessageWrap, {
        className: external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.inputMessage,
        id: messageDomId,
        $textColor: statusMessageColor,
        "aria-live": "polite",
        "data-status": status
    }, statusIcon && /*#__PURE__*/ external_react_default().createElement(external_InputWrap_styles_cjs_default().InputMessageIconWrap, {
        "aria-hidden": true,
        $color: statusIconColor
    }, statusIcon), message));
};
exports.InputWrap = __webpack_exports__.InputWrap;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "InputWrap"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
