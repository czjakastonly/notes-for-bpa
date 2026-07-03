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
    SelectInteractionsContainer: ()=>SelectInteractionsContainer
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const index_cjs_namespaceObject = require("../../List/index.cjs");
const InteractionAction_index_cjs_namespaceObject = require("../../../utils/interactions/InteractionAction/index.cjs");
const InteractionHighlight_index_cjs_namespaceObject = require("../../../utils/interactions/InteractionHighlight/index.cjs");
const InteractionScroll_index_cjs_namespaceObject = require("../../../utils/interactions/InteractionScroll/index.cjs");
const mergeRefs_cjs_namespaceObject = require("../../../utils/mergeRefs.cjs");
const domId_cjs_namespaceObject = require("../../../utils/domId.cjs");
const SelectInteractionsContainer = ({ 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, children, id, maxHeightPx, searchOnChangeValue, searchPlaceholder, searchValue, shouldShowSearch })=>{
    const internalRef = (0, external_react_namespaceObject.useRef)(null);
    const searchInputRef = (0, external_react_namespaceObject.useRef)(null);
    const searchInputDomId = (0, domId_cjs_namespaceObject.useDomId)();
    const listboxDomId = (0, domId_cjs_namespaceObject.generateListboxDomId)(searchInputDomId);
    const { containerRef: highlightInteractionContainerRef, handleArrowDownPressed, handleArrowUpPressed, handleFocus, handleBlur, highlightedUuid } = (0, InteractionHighlight_index_cjs_namespaceObject.useInteractionHighlightContainer)();
    const { containerRef: scrollInteractionContainerRef } = (0, InteractionScroll_index_cjs_namespaceObject.useInteractionScrollContainer)();
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
    const ref = (0, mergeRefs_cjs_namespaceObject.useMergeRefs)(internalRef, highlightInteractionContainerRef, scrollInteractionContainerRef);
    const shouldAutoFocusOnContainer = !shouldShowSearch;
    (0, external_react_namespaceObject.useEffect)(()=>{
        var _internalRef_current, _searchInputRef_current;
        if (!shouldAutoFocusOnContainer || (null == (_internalRef_current = internalRef.current) ? void 0 : _internalRef_current.contains(document.activeElement))) {
            if (!shouldAutoFocusOnContainer && !(null == (_searchInputRef_current = searchInputRef.current) ? void 0 : _searchInputRef_current.contains(document.activeElement))) {
                var _searchInputRef_current1;
                null == (_searchInputRef_current1 = searchInputRef.current) || _searchInputRef_current1.focus();
            }
        } else {
            var _internalRef_current1;
            null == (_internalRef_current1 = internalRef.current) || _internalRef_current1.focus();
        }
    }, [
        shouldAutoFocusOnContainer
    ]);
    return shouldShowSearch ? /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.List, {
        id: id,
        role: "dialog",
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown,
        ref: ref,
        tabIndex: 0
    }, /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.ListHeader, null, /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.ListSearchInput, {
        "aria-activedescendant": highlightedUuid || void 0,
        "aria-autocomplete": "list",
        "aria-controls": listboxDomId,
        "aria-expanded": "true",
        "aria-haspopup": "listbox",
        autoComplete: "off",
        autoFocus: false,
        id: searchInputDomId,
        onChangeValue: searchOnChangeValue,
        placeholder: searchPlaceholder,
        ref: searchInputRef,
        role: "combobox",
        value: searchValue
    })), /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.ListBody, {
        id: listboxDomId,
        role: "listbox",
        style: {
            maxHeight: maxHeightPx
        }
    }, children)) : /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.List, {
        "aria-activedescendant": highlightedUuid || void 0,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        id: id,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown,
        ref: ref,
        role: "listbox",
        tabIndex: 0
    }, /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.ListBody, {
        style: {
            maxHeight: maxHeightPx
        }
    }, children));
};
exports.SelectInteractionsContainer = __webpack_exports__.SelectInteractionsContainer;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "SelectInteractionsContainer"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
