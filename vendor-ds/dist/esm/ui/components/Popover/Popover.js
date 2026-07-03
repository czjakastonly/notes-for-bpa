import react, { useEffect, useRef } from "react";
import { Portal } from "../../utils/Portal/index.js";
import { AnimatePresence } from "framer-motion";
import { FocusLock } from "../../utils/FocusLock/index.js";
import { Container } from "./Popover.styles.js";
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
function Popover_ownKeys(object, enumerableOnly) {
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
    else Popover_ownKeys(Object(source)).forEach(function(key) {
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
const Popover = /*#__PURE__*/ react.forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { style = {}, children, minWidthPx, maxWidthPx, maxHeightPx, isFocusLocked, zIndex } = _ref1, restMotionDivProps = _object_without_properties(_ref1, [
        "style",
        "children",
        "minWidthPx",
        "maxWidthPx",
        "maxHeightPx",
        "isFocusLocked",
        "zIndex"
    ]), [forwardedRef] = _rest;
    const activeElementBeforeOpenRef = useRef(document.activeElement);
    useEffect(()=>()=>{
            var _activeElementBeforeOpenRef_current_focus, _activeElementBeforeOpenRef_current;
            null == activeElementBeforeOpenRef || null == (_activeElementBeforeOpenRef_current = activeElementBeforeOpenRef.current) || null == (_activeElementBeforeOpenRef_current_focus = _activeElementBeforeOpenRef_current.focus) || _activeElementBeforeOpenRef_current_focus.call(_activeElementBeforeOpenRef_current);
            activeElementBeforeOpenRef.current = null;
        }, []);
    const appliedStyle = Object.assign(style, minWidthPx && {
        minWidth: `${minWidthPx}px`
    }, maxWidthPx && {
        maxWidth: `${maxWidthPx}px`
    }, maxHeightPx && {
        maxHeight: `${maxHeightPx}px`
    });
    return /*#__PURE__*/ react.createElement(AnimatePresence, null, /*#__PURE__*/ react.createElement(Portal, {
        zIndex: zIndex
    }, /*#__PURE__*/ react.createElement(FocusLock, {
        isFocusLocked: isFocusLocked
    }, /*#__PURE__*/ react.createElement(Container, _object_spread_props(_object_spread({}, restMotionDivProps), {
        ref: forwardedRef,
        style: appliedStyle
    }), children))));
});
export { Popover };
