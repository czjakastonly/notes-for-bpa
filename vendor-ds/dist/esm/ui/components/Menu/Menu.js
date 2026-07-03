import react from "react";
import { useMergeRefs } from "../../utils/mergeRefs.js";
import { Popover } from "../Popover/index.js";
import { useFloatingDropdown } from "../Dropdown/index.js";
import { generateDialogDomId, generateListboxDomId, useDomId } from "../../utils/domId.js";
import { STATIC_CLASS_NAME } from "../../constants.js";
import { ButtonOutline } from "../buttons/ButtonOutline/index.js";
import { InteractionHighlightProvider } from "../../utils/interactions/InteractionHighlight/index.js";
import { InteractionActionProvider } from "../../utils/interactions/InteractionAction/index.js";
import { MenuInteractionsContainer } from "./_shared/MenuInteractionsContainer.js";
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
function Menu_ownKeys(object, enumerableOnly) {
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
    else Menu_ownKeys(Object(source)).forEach(function(key) {
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
const CLOSING_KEY_LIST = [
    'Escape',
    'Tab'
];
const Menu = /*#__PURE__*/ react.forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { as: TriggerComponent = ButtonOutline, children, id, isFlipDisabled, minWidthRatio, maxHeightPx = 400, maxWidthRatio = 0, onClose, onOpen, onAction, widthPx, placement } = _ref1, restTriggerProps = _object_without_properties(_ref1, [
        "as",
        "children",
        "id",
        "isFlipDisabled",
        "minWidthRatio",
        "maxHeightPx",
        "maxWidthRatio",
        "onClose",
        "onOpen",
        "onAction",
        "widthPx",
        "placement"
    ]), [forwardedRef] = _rest;
    const { refs, isOpen, close, triggerProps, floatingProps } = useFloatingDropdown({
        mainAxisOffset: 4,
        widthExtendPx: 1,
        minWidthRatio,
        maxWidthRatio,
        onClose,
        widthPx,
        closingKeyList: CLOSING_KEY_LIST,
        isFlipDisabled,
        placement,
        onOpen
    });
    const triggerRef = useMergeRefs(forwardedRef, refs.setReference);
    const domId = useDomId(id);
    const listboxId = generateListboxDomId(domId, isOpen);
    const popoverId = generateDialogDomId(domId, isOpen);
    return /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement(TriggerComponent, _object_spread_props(_object_spread({}, restTriggerProps, triggerProps), {
        ref: triggerRef,
        id: domId,
        className: STATIC_CLASS_NAME.dropdownTrigger,
        "aria-haspopup": "menu",
        "aria-controls": listboxId,
        "aria-expanded": isOpen
    })), isOpen && /*#__PURE__*/ react.createElement(Popover, _object_spread_props(_object_spread({
        isFocusLocked: false
    }, floatingProps), {
        role: "presentation",
        id: popoverId
    }), /*#__PURE__*/ react.createElement(InteractionHighlightProvider, null, /*#__PURE__*/ react.createElement(InteractionActionProvider, {
        defaultAction: onAction,
        onPostAction: close
    }, /*#__PURE__*/ react.createElement(MenuInteractionsContainer, {
        id: listboxId,
        maxHeightPx: maxHeightPx,
        "aria-label": restTriggerProps['aria-label'],
        "aria-labelledby": restTriggerProps['aria-labelledby']
    }, children)))));
});
export { Menu };
