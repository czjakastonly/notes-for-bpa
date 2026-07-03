import react, { cloneElement, isValidElement } from "react";
import { STATIC_CLASS_NAME } from "../../constants.js";
import { generateDescribeDomId, useDomId } from "../../utils/domId.js";
import Tooltip_styles from "./_shared/Tooltip.styles.js";
import { useFloatingTooltip } from "./useFloatingTooltip.js";
import { TooltipBalloon } from "./components/TooltipBalloon.js";
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
function Tooltip_ownKeys(object, enumerableOnly) {
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
    else Tooltip_ownKeys(Object(source)).forEach(function(key) {
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
const Tooltip = (_0)=>{
    let { children, content, placement, isInitialOpen, isFlipDisabled, isFocusListenerEnabled, isHoverListenerEnabled, strategy, offset, id } = _0, tooltipBalloonProps = _object_without_properties(_0, [
        "children",
        "content",
        "placement",
        "isInitialOpen",
        "isFlipDisabled",
        "isFocusListenerEnabled",
        "isHoverListenerEnabled",
        "strategy",
        "offset",
        "id"
    ]);
    const { isOpen, triggerProps, arrowProps, floatingProps, open, close } = useFloatingTooltip({
        placement,
        isInitialOpen,
        isFlipDisabled,
        isFocusListenerEnabled,
        isHoverListenerEnabled,
        strategy,
        offset
    });
    const domId = useDomId(id);
    const shouldShowBalloon = isOpen && !!content;
    const balloonId = generateDescribeDomId(domId, shouldShowBalloon);
    return /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement(Tooltip_styles.TriggerWrap, _object_spread_props(_object_spread({
        className: STATIC_CLASS_NAME.tooltipTrigger
    }, triggerProps), {
        onFocus: open,
        onBlur: close
    }), /*#__PURE__*/ isValidElement(children) ? /*#__PURE__*/ cloneElement(children, {
        'aria-describedby': balloonId
    }) : children), shouldShowBalloon ? /*#__PURE__*/ react.createElement(TooltipBalloon, _object_spread_props(_object_spread({
        role: "tooltip"
    }, tooltipBalloonProps, floatingProps), {
        arrowRef: arrowProps.ref,
        arrowStyle: arrowProps.style,
        id: balloonId
    }), content) : null);
};
export { Tooltip };
