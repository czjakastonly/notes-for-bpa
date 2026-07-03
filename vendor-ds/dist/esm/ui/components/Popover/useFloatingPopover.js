import { useCallback, useState } from "react";
import { autoUpdate, flip, hide, offset, shift, useFloating } from "@floating-ui/react-dom";
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
const useFloatingPopover = ({ isInitialOpen = false, isFlipDisabled = false, strategy = 'fixed', placement = 'bottom-end', offset: offsetValue = 0, onClose, onOpen })=>{
    var _middlewareData_hide;
    const [isOpen, setIsOpen] = useState(!!isInitialOpen);
    const { refs, floatingStyles, middlewareData } = useFloating({
        strategy,
        whileElementsMounted: autoUpdate,
        placement,
        transform: false,
        open: false,
        middleware: [
            offset(offsetValue),
            flip({
                mainAxis: !isFlipDisabled,
                crossAxis: !isFlipDisabled
            }),
            shift({
                padding: 8,
                crossAxis: !!isFlipDisabled
            }),
            hide()
        ]
    });
    const open = useCallback(()=>{
        setIsOpen(true);
        null == onOpen || onOpen();
    }, [
        onOpen
    ]);
    const close = useCallback(()=>{
        null == onClose || onClose();
        setIsOpen(false);
    }, [
        onClose
    ]);
    const toggle = useCallback(()=>{
        if (isOpen) close();
        else open();
        return !isOpen;
    }, [
        isOpen,
        close,
        open
    ]);
    const style = _object_spread({}, floatingStyles, (null == (_middlewareData_hide = middlewareData.hide) ? void 0 : _middlewareData_hide.referenceHidden) ? {
        visibility: 'hidden',
        pointerEvents: 'none'
    } : {
        visibility: 'visible',
        pointerEvents: 'all'
    });
    return {
        refs,
        style,
        middlewareData,
        isOpen,
        toggle,
        open,
        close
    };
};
export { useFloatingPopover };
