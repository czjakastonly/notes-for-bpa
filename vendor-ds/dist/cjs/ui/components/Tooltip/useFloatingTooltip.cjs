"use strict";
var __webpack_require__ = {};
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
    useFloatingTooltip: ()=>useFloatingTooltip
});
const external_react_namespaceObject = require("react");
const react_dom_namespaceObject = require("@floating-ui/react-dom");
const external_lodash_namespaceObject = require("lodash");
const onKeysDown_cjs_namespaceObject = require("../../utils/onKeysDown.cjs");
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
    const closeTimeoutRef = (0, external_react_namespaceObject.useRef)();
    const [isOpen, setIsOpen] = (0, external_react_namespaceObject.useState)(!!isInitialOpen);
    const arrowRef = (0, external_react_namespaceObject.useRef)(null);
    const { refs, floatingStyles, middlewareData, placement: finalPlacement } = (0, react_dom_namespaceObject.useFloating)({
        strategy,
        whileElementsMounted: react_dom_namespaceObject.autoUpdate,
        placement: preferredPlacement,
        transform: false,
        open: false,
        middleware: [
            (0, react_dom_namespaceObject.offset)(offsetValue),
            isFlipDisabled ? null : (0, react_dom_namespaceObject.flip)({
                fallbackPlacements: [
                    'bottom',
                    'right',
                    'top',
                    'left'
                ]
            }),
            (0, react_dom_namespaceObject.shift)({
                padding: 8,
                crossAxis: true
            }),
            (0, react_dom_namespaceObject.arrow)({
                element: arrowRef,
                padding: 12
            }),
            (0, react_dom_namespaceObject.hide)()
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
    const open = (0, external_react_namespaceObject.useCallback)(()=>{
        clearTimeout(closeTimeoutRef.current);
        setIsOpen(true);
    }, []);
    const close = (0, external_react_namespaceObject.useCallback)(()=>{
        setIsOpen(false);
    }, []);
    const delayedClose = (0, external_react_namespaceObject.useCallback)(()=>{
        closeTimeoutRef.current = (0, external_lodash_namespaceObject.delay)(setIsOpen, 100, false);
    }, []);
    (0, onKeysDown_cjs_namespaceObject.useOnKeysDown)({
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
exports.useFloatingTooltip = __webpack_exports__.useFloatingTooltip;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "useFloatingTooltip"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
