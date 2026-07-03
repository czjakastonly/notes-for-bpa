import react, { useCallback, useEffect, useRef } from "react";
import { List, ListBody } from "../../List/index.js";
import { useInteractionActionContainer } from "../../../utils/interactions/InteractionAction/index.js";
import { useInteractionHighlightContainer } from "../../../utils/interactions/InteractionHighlight/index.js";
import { useMergeRefs } from "../../../utils/mergeRefs.js";
const MenuInteractionsContainer = ({ 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, children, id, maxHeightPx })=>{
    const internalRef = useRef(null);
    const { containerRef: highlightInteractionContainerRef, handleArrowDownPressed, handleArrowUpPressed, handleFocus, handleBlur, highlightedUuid } = useInteractionHighlightContainer();
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
    const ref = useMergeRefs(internalRef, highlightInteractionContainerRef);
    useEffect(()=>{
        var _internalRef_current;
        if (!(null == (_internalRef_current = internalRef.current) ? void 0 : _internalRef_current.contains(document.activeElement))) {
            var _internalRef_current1;
            null == (_internalRef_current1 = internalRef.current) || _internalRef_current1.focus();
        }
    }, []);
    return /*#__PURE__*/ react.createElement(List, {
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
    }, /*#__PURE__*/ react.createElement(ListBody, {
        style: {
            maxHeight: maxHeightPx
        }
    }, children));
};
export { MenuInteractionsContainer };
