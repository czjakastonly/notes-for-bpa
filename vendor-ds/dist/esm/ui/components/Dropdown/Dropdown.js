import react, { useImperativeHandle, useMemo, useRef } from "react";
import { useMergeRefs } from "../../utils/mergeRefs.js";
import { Popover } from "../Popover/index.js";
import { generateDialogDomId, useDomId } from "../../utils/domId.js";
import { ButtonFieldSelect } from "../inputs/components/ButtonFieldSelect/index.js";
import { useFloatingDropdown } from "./useFloatingDropdown.js";
import { DropdownContext } from "./DropdownContext.js";
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
function Dropdown_ownKeys(object, enumerableOnly) {
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
    else Dropdown_ownKeys(Object(source)).forEach(function(key) {
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
const Dropdown = /*#__PURE__*/ react.forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { as: TriggerComponent = ButtonFieldSelect, children, closingKeyList, id, isFlipDisabled, isFocusLocked, maxWidthRatio, minWidthRatio, widthPx, mainAxisOffset, widthExtendPx, onClose, onOpen, placement, strategy } = _ref1, restTriggerProps = _object_without_properties(_ref1, [
        "as",
        "children",
        "closingKeyList",
        "id",
        "isFlipDisabled",
        "isFocusLocked",
        "maxWidthRatio",
        "minWidthRatio",
        "widthPx",
        "mainAxisOffset",
        "widthExtendPx",
        "onClose",
        "onOpen",
        "placement",
        "strategy"
    ]), [forwardedRef] = _rest;
    const { isOpen, triggerProps, floatingProps, open, close, refs } = useFloatingDropdown({
        isFlipDisabled,
        strategy,
        mainAxisOffset,
        widthExtendPx,
        maxWidthRatio,
        minWidthRatio,
        onClose,
        onOpen,
        closingKeyList,
        placement
    });
    const triggerInternalRef = useRef(null);
    const triggerRef = useMergeRefs(triggerInternalRef, refs.setReference);
    const triggerId = useDomId(id);
    const popoverId = generateDialogDomId(triggerId, isOpen);
    useImperativeHandle(forwardedRef, ()=>({
            close,
            focus: ()=>{
                var _triggerInternalRef_current;
                null == (_triggerInternalRef_current = triggerInternalRef.current) || _triggerInternalRef_current.focus();
            },
            getBoundingClientRect: ()=>{
                var _triggerInternalRef_current;
                const domRect = null == (_triggerInternalRef_current = triggerInternalRef.current) ? void 0 : _triggerInternalRef_current.getBoundingClientRect();
                if (!domRect) throw new Error('STON:ERR: did you pass proper trigger ("as" property) to <FloatingDropdown> component? Does it handle ref?');
                return domRect;
            },
            open,
            isOpen
        }), [
        close,
        open,
        isOpen
    ]);
    return /*#__PURE__*/ react.createElement(DropdownContext.Provider, {
        value: useMemo(()=>({
                close,
                open
            }), [
            close,
            open
        ])
    }, /*#__PURE__*/ react.createElement(TriggerComponent, _object_spread_props(_object_spread({}, restTriggerProps, triggerProps), {
        id: triggerId,
        ref: triggerRef,
        "aria-haspopup": "dialog",
        "aria-expanded": isOpen,
        "aria-controls": popoverId
    })), isOpen && /*#__PURE__*/ react.createElement(Popover, _object_spread_props(_object_spread({}, floatingProps), {
        isFocusLocked: isFocusLocked,
        minWidthPx: widthPx,
        maxWidthPx: widthPx,
        role: "dialog",
        id: popoverId
    }), children));
});
export { Dropdown };
