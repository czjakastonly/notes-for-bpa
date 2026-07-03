import { useCallback, useRef, useState } from "react";
import { arrow, autoUpdate, flip, hide, offset, shift, useFloating } from "@floating-ui/react-dom";
import { delay } from "lodash";
import { useOnKeysDown } from "../../utils/onKeysDown.js";
const ARROW_SIZE = '6px';
const DEFAULT_OFFSET = {
    mainAxis: 10,
    crossAxis: 0,
    alignmentAxis: null
};
const negativePlacementForPlacement = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right'
};
const useFloatingTooltip = ({ isInitialOpen = false, isFlipDisabled = false, isFocusListenerEnabled = true, isHoverListenerEnabled = true, strategy = 'absolute', placement: preferredPlacement = 'top', offset: offsetValue = DEFAULT_OFFSET })=>{
    const closeTimeoutRef = useRef();
    const [isOpen, setIsOpen] = useState(!!isInitialOpen);
    const arrowRef = useRef(null);
    const { refs, floatingStyles, middlewareData, placement: finalPlacement } = useFloating({
        strategy,
        whileElementsMounted: autoUpdate,
        placement: preferredPlacement,
        transform: false,
        open: false,
        middleware: [
            offset(offsetValue),
            isFlipDisabled ? null : flip({
                fallbackPlacements: [
                    'bottom',
                    'right',
                    'top',
                    'left'
                ]
            }),
            shift({
                padding: 8,
                crossAxis: true
            }),
            arrow({
                element: arrowRef,
                padding: 12
            }),
            hide()
        ]
    });
    function arrowStyle() {
        if (middlewareData.arrow) {
            const { x: arrowX, y: arrowY } = middlewareData.arrow;
            const basePlacement = finalPlacement.split('-')[0];
            const arrowPlacement = negativePlacementForPlacement[basePlacement];
            return {
                width: ARROW_SIZE,
                height: ARROW_SIZE,
                top: 'number' == typeof arrowY ? `${arrowY}px` : '',
                left: 'number' == typeof arrowX ? `${arrowX}px` : '',
                [arrowPlacement]: `calc(${ARROW_SIZE} / -2)`
            };
        }
        return {};
    }
    const open = useCallback(()=>{
        clearTimeout(closeTimeoutRef.current);
        setIsOpen(true);
    }, []);
    const close = useCallback(()=>{
        setIsOpen(false);
    }, []);
    const delayedClose = useCallback(()=>{
        closeTimeoutRef.current = delay(setIsOpen, 100, false);
    }, []);
    useOnKeysDown({
        eventKeyList: [
            'Escape'
        ],
        callback: close,
        condition: isOpen
    });
    const triggerProps = {
        ref: refs.setReference,
        onMouseEnter: isHoverListenerEnabled ? open : void 0,
        onMouseLeave: isHoverListenerEnabled ? delayedClose : void 0,
        onFocus: isFocusListenerEnabled ? open : void 0,
        onBlur: isFocusListenerEnabled ? close : void 0
    };
    const floatingProps = {
        ref: refs.setFloating,
        style: floatingStyles,
        onMouseEnter: void 0,
        onMouseLeave: void 0
    };
    const arrowProps = {
        ref: arrowRef,
        style: arrowStyle()
    };
    return {
        refs,
        middlewareData,
        isOpen,
        open,
        close,
        triggerProps,
        arrowProps,
        floatingProps
    };
};
export { useFloatingTooltip };
