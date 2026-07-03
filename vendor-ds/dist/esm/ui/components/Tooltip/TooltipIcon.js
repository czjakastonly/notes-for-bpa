import react, { useImperativeHandle } from "react";
import Help_16 from "../../atoms/icons/Help-16.js";
import { generateDescribeDomId, useDomId } from "../../utils/domId.js";
import { VisuallyHidden } from "../VisuallyHidden/index.js";
import { TooltipBalloon } from "./components/TooltipBalloon.js";
import { useFloatingTooltip } from "./useFloatingTooltip.js";
import Tooltip_styles from "./_shared/Tooltip.styles.js";
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
function TooltipIcon_ownKeys(object, enumerableOnly) {
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
    else TooltipIcon_ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}
const TooltipIcon = /*#__PURE__*/ react.forwardRef(({ children, id, as: TriggerIcon = Help_16 }, forwardedRef)=>{
    const { isOpen, triggerProps, arrowProps, floatingProps, open, close } = useFloatingTooltip({
        placement: 'top',
        isInitialOpen: false
    });
    const triggerId = useDomId(id);
    const balloonId = generateDescribeDomId(triggerId);
    useImperativeHandle(forwardedRef, ()=>({
            open,
            close
        }), [
        open,
        close
    ]);
    return /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement(Tooltip_styles.TriggerIconWrapper, _object_spread_props(_object_spread({}, triggerProps), {
        id: triggerId,
        tabIndex: 0
    }), /*#__PURE__*/ react.createElement(TriggerIcon, {
        "aria-describedby": balloonId,
        "aria-label": "more info"
    }), /*#__PURE__*/ react.createElement(VisuallyHidden, {
        id: balloonId,
        role: "tooltip"
    }, children)), isOpen && /*#__PURE__*/ react.createElement(TooltipBalloon, _object_spread_props(_object_spread({
        "aria-hidden": true
    }, floatingProps), {
        arrowRef: arrowProps.ref,
        arrowStyle: arrowProps.style
    }), children));
});
export { TooltipIcon };
