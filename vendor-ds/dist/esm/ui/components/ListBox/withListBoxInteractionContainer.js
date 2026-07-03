import { useInteractionActionContainer } from "../../utils/interactions/InteractionAction/index.js";
import { useInteractionHighlightContainer } from "../../utils/interactions/InteractionHighlight/index.js";
import { useMergeRefs } from "../../utils/mergeRefs.js";
import react, { useCallback, useEffect, useRef } from "react";
import { useInteractionScrollContainer } from "../../utils/interactions/InteractionScroll/index.js";
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
function withListBoxInteractionContainer_ownKeys(object, enumerableOnly) {
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
    else withListBoxInteractionContainer_ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}
function _object_without_properties(source, excluded) {
    if (null == source) return {};
    var target = {}, sourceKeys, key, i;
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        sourceKeys = Reflect.ownKeys(Object(source));
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (!(excluded.indexOf(key) >= 0)) {
                if (Object.prototype.propertyIsEnumerable.call(source, key)) target[key] = source[key];
            }
        }
        return target;
    }
    target = _object_without_properties_loose(source, excluded);
    if (Object.getOwnPropertySymbols) {
        sourceKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (!(excluded.indexOf(key) >= 0)) {
                if (Object.prototype.propertyIsEnumerable.call(source, key)) target[key] = source[key];
            }
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (null == source) return {};
    var target = {}, sourceKeys = Object.getOwnPropertyNames(source), key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (!(excluded.indexOf(key) >= 0)) {
            if (Object.prototype.propertyIsEnumerable.call(source, key)) target[key] = source[key];
        }
    }
    return target;
}
function withListBoxInteractionContainer(ContainerComponent) {
    return /*#__PURE__*/ react.forwardRef((_0, _1)=>{
        let _ref = [
            _0,
            _1
        ], [_ref1, ..._rest] = _ref, { autoFocus, children, tabIndex = 0 } = _ref1, restRenderContainerComponentProps = _object_without_properties(_ref1, [
            "autoFocus",
            "children",
            "tabIndex"
        ]), [forwardedRef] = _rest;
        const internalContainerRef = useRef(null);
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
        const ref = useMergeRefs(internalContainerRef, forwardedRef, highlightInteractionContainerRef, scrollInteractionContainerRef);
        useEffect(()=>{
            var _internalContainerRef_current;
            if (autoFocus && !(null == (_internalContainerRef_current = internalContainerRef.current) ? void 0 : _internalContainerRef_current.contains(document.activeElement))) {
                var _internalContainerRef_current1;
                null == (_internalContainerRef_current1 = internalContainerRef.current) || _internalContainerRef_current1.focus();
            }
        }, [
            autoFocus
        ]);
        if (!(Number(tabIndex) >= -1)) throw new Error(`STON.ERROR.DEV - invalid ListBoxInteractionContainer tabIndex = [${JSON.stringify(tabIndex)}]`);
        return /*#__PURE__*/ react.createElement(ContainerComponent, _object_spread_props(_object_spread({}, restRenderContainerComponentProps), {
            ref: ref,
            tabIndex: tabIndex,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onKeyDown: handleKeyDown,
            "aria-activedescendant": highlightedUuid
        }), children);
    });
}
export { withListBoxInteractionContainer };
