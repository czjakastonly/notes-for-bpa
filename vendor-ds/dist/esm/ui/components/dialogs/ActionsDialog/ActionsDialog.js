import react, { useRef, useState } from "react";
import { RowFlex } from "../../Flex/index.js";
import { ButtonPrimary } from "../../buttons/ButtonPrimary/index.js";
import { ButtonMinimal } from "../../buttons/ButtonMinimal/index.js";
import { generateDescribeDomId, generateLabelDomId, useDomId } from "../../../utils/domId.js";
import { STATIC_CLASS_NAME } from "../../../constants.js";
import { mergeClassNames } from "../../../utils/mergeClassNames.js";
import { DialogHeader } from "./components/DialogHeader.js";
import { DialogContentWrap } from "./components/DialogContentWrap.js";
import { DialogFooterWrap } from "./components/DialogFooterWrap.js";
import { DialogWrap } from "./components/DialogWrap.js";
import { DialogContent } from "./components/DialogContent.js";
import { DialogCloseButton } from "./components/DialogCloseButton.js";
import Loader from "../_shared/Loader.js";
import { ContentWrapRefContext } from "../_shared/ContentWrapRefContext.js";
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
function ActionsDialog_ownKeys(object, enumerableOnly) {
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
    else ActionsDialog_ownKeys(Object(source)).forEach(function(key) {
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
const ActionsDialog = (_0)=>{
    let { autoFocusMode, children, className, closeAction, contentWrapMode = 'standard', id, initialState, isLoading, primaryAction, primaryButtonComponent = ButtonPrimary, primaryIsDisabled = false, primaryIsLoading = false, primaryLabel = '____', secondaryAction, secondaryButtonComponent = ButtonMinimal, secondaryIsDisabled = false, secondaryLabel, showHeaderDivider, size, tertiaryRender, title, titleIcon } = _0, restDivAttributes = _object_without_properties(_0, [
        "autoFocusMode",
        "children",
        "className",
        "closeAction",
        "contentWrapMode",
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
        "showHeaderDivider",
        "size",
        "tertiaryRender",
        "title",
        "titleIcon"
    ]);
    const contentWrapRef = useRef(null);
    const [dialogState, setDialogState] = useState(initialState);
    const domId = useDomId(id);
    const titleId = generateLabelDomId(domId, !!title);
    const contentId = generateDescribeDomId(domId, 'string' == typeof children);
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
    return /*#__PURE__*/ react.createElement(DialogWrap, _object_spread_props(_object_spread({
        role: "dialog",
        "aria-labelledby": titleId,
        "aria-describedby": contentId
    }, restDivAttributes), {
        className: mergeClassNames(STATIC_CLASS_NAME.dialog, className),
        id: domId,
        size: size
    }), /*#__PURE__*/ react.createElement(ContentWrapRefContext.Provider, {
        value: contentWrapRef
    }, /*#__PURE__*/ react.createElement(DialogHeader, {
        iconLeft: titleIcon,
        titleId: titleId,
        showBottomDivider: showHeaderDivider
    }, title), /*#__PURE__*/ react.createElement(DialogContentWrap, {
        id: contentId,
        className: STATIC_CLASS_NAME.dialogContent,
        "data-ston-role": "dialog-content",
        isLoading: isLoading
    }, isLoading ? /*#__PURE__*/ react.createElement(RowFlex, {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 3,
        paddingBottom: 2
    }, /*#__PURE__*/ react.createElement(Loader, null)) : /*#__PURE__*/ react.createElement(DialogContent, {
        isNoPadding: 'nopadding' === contentWrapMode,
        ref: contentWrapRef
    }, children)), /*#__PURE__*/ react.createElement(DialogFooterWrap, null, shouldShowTertiary && tertiaryRender(setDialogState, dialogState), /*#__PURE__*/ react.createElement(RowFlex, {
        gap: 2,
        marginLeft: "auto",
        flexShrink: 0
    }, shouldShowSecondary && /*#__PURE__*/ react.createElement(SecondaryActionButton, {
        onClick: handleSecondaryClick,
        disabled: isSecondaryActionDisabled,
        autoFocus: 'secondary' === autoFocusMode,
        "data-action": "secondary"
    }, secondaryLabel), shouldShowPrimary && /*#__PURE__*/ react.createElement(PrimaryActionButton, {
        onClick: handlePrimaryClick,
        disabled: isPrimaryActionDisabled,
        isLoading: primaryIsLoading,
        autoFocus: 'primary' === autoFocusMode,
        "data-action": "primary"
    }, primaryLabel))), shouldShowClose && /*#__PURE__*/ react.createElement(DialogCloseButton, {
        autoFocus: 'close' === autoFocusMode,
        onClick: closeAction,
        "aria-label": "close",
        "data-action": "close"
    })));
};
ActionsDialog.displayName = 'ActionsDialog';
export { ActionsDialog };
