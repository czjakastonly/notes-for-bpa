import { useCallback } from "react";
import { useOnClickOutside } from "../../utils/onClickOutside.js";
import { useOnKeysDown } from "../../utils/onKeysDown.js";
import { useDomElementSize } from "../../utils/domElementSize.js";
import { useFloatingPopover } from "../Popover/useFloatingPopover.js";
import { getIsElementTopDropdown } from "./Dropdown.helpers.js";
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
function useFloatingDropdown_ownKeys(object, enumerableOnly) {
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
    else useFloatingDropdown_ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}
const DEFAULT_CLOSING_KEY_LIST = [
    'Escape',
    'Tab'
];
const useFloatingDropdown = ({ isFlipDisabled = false, strategy = 'fixed', mainAxisOffset = 4, widthExtendPx = 1, placement = 'bottom-start', maxWidthRatio = 1, minWidthRatio = 1, widthPx, onClose, onOpen, closingKeyList = DEFAULT_CLOSING_KEY_LIST } = {})=>{
    const { refs, style: floatingStyle, middlewareData, isOpen, toggle, open, close } = useFloatingPopover({
        isInitialOpen: false,
        isFlipDisabled,
        placement,
        strategy,
        offset: {
            mainAxis: mainAxisOffset,
            crossAxis: -widthExtendPx
        },
        onClose,
        onOpen
    });
    const { width: triggerWidth } = useDomElementSize(refs.reference);
    const widthDelta = widthExtendPx ? 2 * widthExtendPx : 0;
    const maxWidth = triggerWidth && maxWidthRatio ? `${triggerWidth * maxWidthRatio + widthDelta}px` : void 0;
    const minWidth = triggerWidth && minWidthRatio ? `${triggerWidth * minWidthRatio + widthDelta}px` : void 0;
    const width = widthPx ? `${widthPx + widthDelta}px` : void 0;
    const style = _object_spread_props(_object_spread({}, floatingStyle), {
        minWidth,
        maxWidth,
        width
    });
    const handleClickOutside = useCallback(()=>{
        if (getIsElementTopDropdown(refs.floating.current)) close();
    }, [
        refs.floating,
        close
    ]);
    useOnClickOutside({
        elementRef: refs.floating,
        callback: handleClickOutside,
        exceptionRef: refs.reference,
        condition: isOpen
    });
    useOnKeysDown({
        eventKeyList: closingKeyList,
        callback: handleClickOutside,
        condition: isOpen
    });
    const handleTriggerKeyDown = useCallback((e)=>{
        if ([
            'ArrowDown',
            ' ',
            'Enter'
        ].includes(e.key)) {
            toggle();
            e.preventDefault();
        }
    }, [
        toggle
    ]);
    return {
        maxWidth,
        minWidth: triggerWidth,
        refs,
        style,
        middlewareData,
        isOpen,
        toggle,
        open,
        close,
        triggerProps: {
            onKeyDown: handleTriggerKeyDown,
            onClick: toggle,
            isOpen,
            isPressed: isOpen,
            'aria-expanded': isOpen,
            ref: refs.setReference
        },
        floatingProps: {
            ref: refs.setFloating,
            style
        }
    };
};
export { useFloatingDropdown };
