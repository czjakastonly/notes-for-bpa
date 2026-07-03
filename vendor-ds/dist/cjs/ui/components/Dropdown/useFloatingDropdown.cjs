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
    useFloatingDropdown: ()=>useFloatingDropdown
});
const external_react_namespaceObject = require("react");
const onClickOutside_cjs_namespaceObject = require("../../utils/onClickOutside.cjs");
const onKeysDown_cjs_namespaceObject = require("../../utils/onKeysDown.cjs");
const domElementSize_cjs_namespaceObject = require("../../utils/domElementSize.cjs");
const useFloatingPopover_cjs_namespaceObject = require("../Popover/useFloatingPopover.cjs");
const external_Dropdown_helpers_cjs_namespaceObject = require("./Dropdown.helpers.cjs");
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
    const { refs, style: floatingStyle, middlewareData, isOpen, toggle, open, close } = (0, useFloatingPopover_cjs_namespaceObject.useFloatingPopover)({
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
    const { width: triggerWidth } = (0, domElementSize_cjs_namespaceObject.useDomElementSize)(refs.reference);
    const widthDelta = widthExtendPx ? 2 * widthExtendPx : 0;
    const maxWidth = triggerWidth && maxWidthRatio ? `${triggerWidth * maxWidthRatio + widthDelta}px` : void 0;
    const minWidth = triggerWidth && minWidthRatio ? `${triggerWidth * minWidthRatio + widthDelta}px` : void 0;
    const width = widthPx ? `${widthPx + widthDelta}px` : void 0;
    const style = _object_spread_props(_object_spread({}, floatingStyle), {
        minWidth,
        maxWidth,
        width
    });
    const handleClickOutside = (0, external_react_namespaceObject.useCallback)(()=>{
        if ((0, external_Dropdown_helpers_cjs_namespaceObject.getIsElementTopDropdown)(refs.floating.current)) close();
    }, [
        refs.floating,
        close
    ]);
    (0, onClickOutside_cjs_namespaceObject.useOnClickOutside)({
        elementRef: refs.floating,
        callback: handleClickOutside,
        exceptionRef: refs.reference,
        condition: isOpen
    });
    (0, onKeysDown_cjs_namespaceObject.useOnKeysDown)({
        eventKeyList: closingKeyList,
        callback: handleClickOutside,
        condition: isOpen
    });
    const handleTriggerKeyDown = (0, external_react_namespaceObject.useCallback)((e)=>{
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
exports.useFloatingDropdown = __webpack_exports__.useFloatingDropdown;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "useFloatingDropdown"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
