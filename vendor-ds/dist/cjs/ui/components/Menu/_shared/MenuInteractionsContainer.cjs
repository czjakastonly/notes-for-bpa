"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.n = (module)=>{
        var getter = module && module.__esModule ? ()=>module['default'] : ()=>module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
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
    MenuInteractionsContainer: ()=>MenuInteractionsContainer
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const index_cjs_namespaceObject = require("../../List/index.cjs");
const InteractionAction_index_cjs_namespaceObject = require("../../../utils/interactions/InteractionAction/index.cjs");
const InteractionHighlight_index_cjs_namespaceObject = require("../../../utils/interactions/InteractionHighlight/index.cjs");
const mergeRefs_cjs_namespaceObject = require("../../../utils/mergeRefs.cjs");
const MenuInteractionsContainer = ({ 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, children, id, maxHeightPx })=>{
    const internalRef = (0, external_react_namespaceObject.useRef)(null);
    const { containerRef: highlightInteractionContainerRef, handleArrowDownPressed, handleArrowUpPressed, handleFocus, handleBlur, highlightedUuid } = (0, InteractionHighlight_index_cjs_namespaceObject.useInteractionHighlightContainer)();
    const { handleEnterPressed, handleSpacePressed } = (0, InteractionAction_index_cjs_namespaceObject.useInteractionActionContainer)();
    const handleKeyDown = (0, external_react_namespaceObject.useCallback)((e)=>{
        if ('ArrowDown' === e.key) handleArrowDownPressed(e);
        else if ('ArrowUp' === e.key) handleArrowUpPressed(e);
        else if ('Enter' === e.key) handleEnterPressed(e);
        else if (' ' === e.key) handleSpacePressed(e);
    }, [
        handleArrowDownPressed,
        handleArrowUpPressed,
        handleEnterPressed,
        handleSpacePressed
    ]);
    const ref = (0, mergeRefs_cjs_namespaceObject.useMergeRefs)(internalRef, highlightInteractionContainerRef);
    (0, external_react_namespaceObject.useEffect)(()=>{
        var _internalRef_current;
        if (!(null == (_internalRef_current = internalRef.current) ? void 0 : _internalRef_current.contains(document.activeElement))) {
            var _internalRef_current1;
            null == (_internalRef_current1 = internalRef.current) || _internalRef_current1.focus();
        }
    }, []);
    return /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.List, {
        "aria-activedescendant": highlightedUuid || void 0,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        id: id,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onKeyDown: handleKeyDown,
        ref: ref,
        role: "menu",
        tabIndex: 0
    }, /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.ListBody, {
        style: {
            maxHeight: maxHeightPx
        }
    }, children));
};
exports.MenuInteractionsContainer = __webpack_exports__.MenuInteractionsContainer;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "MenuInteractionsContainer"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
