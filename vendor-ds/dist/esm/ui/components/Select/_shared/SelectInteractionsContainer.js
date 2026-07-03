import react, { useCallback, useEffect, useRef } from "react";
import { List, ListBody, ListHeader, ListSearchInput } from "../../List/index.js";
import { useInteractionActionContainer } from "../../../utils/interactions/InteractionAction/index.js";
import { useInteractionHighlightContainer } from "../../../utils/interactions/InteractionHighlight/index.js";
import { useInteractionScrollContainer } from "../../../utils/interactions/InteractionScroll/index.js";
import { useMergeRefs } from "../../../utils/mergeRefs.js";
import { generateListboxDomId, useDomId } from "../../../utils/domId.js";
const SelectInteractionsContainer = ({ 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, children, id, maxHeightPx, searchOnChangeValue, searchPlaceholder, searchValue, shouldShowSearch })=>{
    const internalRef = useRef(null);
    const searchInputRef = useRef(null);
    const searchInputDomId = useDomId();
    const listboxDomId = generateListboxDomId(searchInputDomId);
    const { containerRef: highlightInteractionContainerRef, handleArrowDownPressed, handleArrowUpPressed, handleFocus, handleBlur, highlightedUuid } = useInteractionHighlightContainer();
    const { containerRef: scrollInteractionContainerRef } = useInteractionScrollContainer();
    const { handleEnterPressed, handleSpacePressed } = useInteractionActionContainer();
    const handleKeyDown = useCallback((e)=>{
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
    const ref = useMergeRefs(internalRef, highlightInteractionContainerRef, scrollInteractionContainerRef);
    const shouldAutoFocusOnContainer = !shouldShowSearch;
    useEffect(()=>{
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
    return shouldShowSearch ? /*#__PURE__*/ react.createElement(List, {
        id: id,
        role: "dialog",
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onKeyDown: handleKeyDown,
        ref: ref,
        tabIndex: 0
    }, /*#__PURE__*/ react.createElement(ListHeader, null, /*#__PURE__*/ react.createElement(ListSearchInput, {
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
    })), /*#__PURE__*/ react.createElement(ListBody, {
        id: listboxDomId,
        role: "listbox",
        style: {
            maxHeight: maxHeightPx
        }
    }, children)) : /*#__PURE__*/ react.createElement(List, {
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
    }, /*#__PURE__*/ react.createElement(ListBody, {
        style: {
            maxHeight: maxHeightPx
        }
    }, children));
};
export { SelectInteractionsContainer };
