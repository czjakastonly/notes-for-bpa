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
    WarningDialog: ()=>WarningDialog
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const index_cjs_namespaceObject = require("../../Flex/index.cjs");
const ButtonPrimary_index_cjs_namespaceObject = require("../../buttons/ButtonPrimary/index.cjs");
const ButtonOutline_index_cjs_namespaceObject = require("../../buttons/ButtonOutline/index.cjs");
const domId_cjs_namespaceObject = require("../../../utils/domId.cjs");
const external_constants_cjs_namespaceObject = require("../../../constants.cjs");
const mergeClassNames_cjs_namespaceObject = require("../../../utils/mergeClassNames.cjs");
const DialogHeader_cjs_namespaceObject = require("./components/DialogHeader.cjs");
const DialogContentWrap_cjs_namespaceObject = require("./components/DialogContentWrap.cjs");
const DialogFooterWrap_cjs_namespaceObject = require("./components/DialogFooterWrap.cjs");
const DialogWrap_cjs_namespaceObject = require("./components/DialogWrap.cjs");
const DialogContent_cjs_namespaceObject = require("./components/DialogContent.cjs");
const DialogCloseButton_cjs_namespaceObject = require("./components/DialogCloseButton.cjs");
const Loader_cjs_namespaceObject = require("../_shared/Loader.cjs");
var Loader_cjs_default = /*#__PURE__*/ __webpack_require__.n(Loader_cjs_namespaceObject);
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
function WarningDialog_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = null != source ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else WarningDialog_ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}
function _object_without_properties(source, excluded) {
    if (null == source) return {};
    var target = {}, sourceKeys, key, i;
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        sourceKeys = Reflect.ownKeys(Object(source));
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (!(excluded.indexOf(key) >= 0)) {
                if (Object.prototype.propertyIsEnumerable.call(source, key)) target[key] = source[key];
            }
        }
        return target;
    }
    target = _object_without_properties_loose(source, excluded);
    if (Object.getOwnPropertySymbols) {
        sourceKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (!(excluded.indexOf(key) >= 0)) {
                if (Object.prototype.propertyIsEnumerable.call(source, key)) target[key] = source[key];
            }
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (null == source) return {};
    var target = {}, sourceKeys = Object.getOwnPropertyNames(source), key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (!(excluded.indexOf(key) >= 0)) {
            if (Object.prototype.propertyIsEnumerable.call(source, key)) target[key] = source[key];
        }
    }
    return target;
}
const WarningDialog = (_0)=>{
    let { autoFocusMode, children, className, closeAction, id, initialState, isLoading, primaryAction, primaryButtonComponent = ButtonPrimary_index_cjs_namespaceObject.ButtonPrimary, primaryIsDisabled = false, primaryIsLoading = false, primaryLabel = '____', secondaryAction, secondaryButtonComponent = ButtonOutline_index_cjs_namespaceObject.ButtonOutline, secondaryIsDisabled = false, secondaryLabel, severity, size = 'small', tertiaryRender, title, titleIcon } = _0, restDivAttributes = _object_without_properties(_0, [
        "autoFocusMode",
        "children",
        "className",
        "closeAction",
        "id",
        "initialState",
        "isLoading",
        "primaryAction",
        "primaryButtonComponent",
        "primaryIsDisabled",
        "primaryIsLoading",
        "primaryLabel",
        "secondaryAction",
        "secondaryButtonComponent",
        "secondaryIsDisabled",
        "secondaryLabel",
        "severity",
        "size",
        "tertiaryRender",
        "title",
        "titleIcon"
    ]);
    const [dialogState, setDialogState] = (0, external_react_namespaceObject.useState)(initialState);
    const domId = (0, domId_cjs_namespaceObject.useDomId)(id);
    const titleId = (0, domId_cjs_namespaceObject.generateLabelDomId)(domId, !!title);
    const contentId = (0, domId_cjs_namespaceObject.generateDescribeDomId)(domId, 'string' == typeof children);
    const shouldShowPrimary = 'function' == typeof primaryAction;
    const PrimaryActionButton = primaryButtonComponent;
    let isPrimaryActionDisabled;
    let handlePrimaryClick;
    if (shouldShowPrimary) {
        isPrimaryActionDisabled = 'function' == typeof primaryIsDisabled ? !!primaryIsDisabled(dialogState) : primaryIsDisabled;
        handlePrimaryClick = ()=>primaryAction(setDialogState, dialogState);
    }
    const shouldShowSecondary = 'function' == typeof secondaryAction;
    const SecondaryActionButton = secondaryButtonComponent;
    let isSecondaryActionDisabled;
    let handleSecondaryClick;
    if (shouldShowSecondary) {
        isSecondaryActionDisabled = 'function' == typeof secondaryIsDisabled ? !!secondaryIsDisabled(dialogState) : secondaryIsDisabled;
        handleSecondaryClick = ()=>secondaryAction(setDialogState, dialogState);
    }
    const shouldShowTertiary = 'function' == typeof tertiaryRender;
    const shouldShowClose = 'function' == typeof closeAction;
    return /*#__PURE__*/ external_react_default().createElement(DialogWrap_cjs_namespaceObject.DialogWrap, _object_spread_props(_object_spread({
        role: "dialog",
        "aria-labelledby": titleId,
        "aria-describedby": contentId
    }, restDivAttributes), {
        className: (0, mergeClassNames_cjs_namespaceObject.mergeClassNames)(external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.dialog, className),
        id: domId,
        size: size
    }), /*#__PURE__*/ external_react_default().createElement(DialogHeader_cjs_namespaceObject.DialogHeader, {
        severity: severity,
        icon: titleIcon,
        titleId: titleId
    }, title), /*#__PURE__*/ external_react_default().createElement(DialogContentWrap_cjs_namespaceObject.DialogContentWrap, {
        "data-cy": "dialogContentWrap",
        id: contentId,
        className: external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.dialogContent,
        isLoading: isLoading
    }, isLoading ? /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.RowFlex, {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 4,
        paddingBottom: 1
    }, /*#__PURE__*/ external_react_default().createElement(Loader_cjs_default(), null)) : /*#__PURE__*/ external_react_default().createElement(DialogContent_cjs_namespaceObject.DialogContent, null, children)), /*#__PURE__*/ external_react_default().createElement(DialogFooterWrap_cjs_namespaceObject.DialogFooterWrap, null, shouldShowTertiary && tertiaryRender(setDialogState, dialogState), /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.RowFlex, {
        gap: 2,
        marginLeft: "auto",
        marginRight: "auto"
    }, shouldShowSecondary && /*#__PURE__*/ external_react_default().createElement(SecondaryActionButton, {
        onClick: handleSecondaryClick,
        disabled: isSecondaryActionDisabled,
        autoFocus: 'secondary' === autoFocusMode,
        "data-action": "secondary"
    }, secondaryLabel), shouldShowPrimary && /*#__PURE__*/ external_react_default().createElement(PrimaryActionButton, {
        onClick: handlePrimaryClick,
        disabled: isPrimaryActionDisabled,
        isLoading: primaryIsLoading,
        autoFocus: 'primary' === autoFocusMode,
        "data-action": "primary"
    }, primaryLabel))), shouldShowClose && /*#__PURE__*/ external_react_default().createElement(DialogCloseButton_cjs_namespaceObject.DialogCloseButton, {
        autoFocus: 'close' === autoFocusMode,
        onClick: closeAction,
        "aria-label": "close",
        "data-action": "close"
    }));
};
WarningDialog.displayName = 'WarningDialog';
exports.WarningDialog = __webpack_exports__.WarningDialog;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "WarningDialog"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
