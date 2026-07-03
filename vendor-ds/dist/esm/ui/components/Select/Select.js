import react, { useCallback, useEffect, useState } from "react";
import { useMergeRefs } from "../../utils/mergeRefs.js";
import { Popover } from "../Popover/index.js";
import { ButtonFieldSelect } from "../inputs/components/ButtonFieldSelect/index.js";
import { useFloatingDropdown } from "../Dropdown/index.js";
import { generateDialogDomId, generateListboxDomId, useDomId } from "../../utils/domId.js";
import { STATIC_CLASS_NAME } from "../../constants.js";
import { InteractionSelectProvider } from "../../utils/interactions/InteractionSelect/index.js";
import { InteractionScrollProvider } from "../../utils/interactions/InteractionScroll/index.js";
import { InteractionActionProvider } from "../../utils/interactions/InteractionAction/index.js";
import { InteractionHighlightProvider } from "../../utils/interactions/InteractionHighlight/index.js";
import { findOptionDataInReactChild } from "./_shared/helpers.js";
import { SelectInteractionsContainer } from "./_shared/SelectInteractionsContainer.js";
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
function Select_ownKeys(object, enumerableOnly) {
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
    else Select_ownKeys(Object(source)).forEach(function(key) {
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
const OPTION_LIST_COUNT_TO_SHOW_SEARCH = 10;
const CLOSING_KEY_LIST = [
    'Escape',
    'Tab'
];
const defaultRenderIconLeft = (optionData)=>null == optionData ? void 0 : optionData.iconLeft;
const defaultRenderLabel = (optionData)=>(null == optionData ? void 0 : optionData.label) || (null == optionData ? void 0 : optionData.value) || '';
const defaultFilterLogic = (phrase, optionData)=>{
    if (optionData && phrase) {
        var _optionData_label;
        const lowerPhrase = phrase.toLowerCase();
        return (null == (_optionData_label = optionData.label) ? void 0 : _optionData_label.toLowerCase().includes(lowerPhrase)) || String(optionData.value).toLowerCase().includes(lowerPhrase);
    }
    return true;
};
const Select = /*#__PURE__*/ react.forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { as: TriggerComponent = ButtonFieldSelect, children, filterLogic = defaultFilterLogic, id, isFlipDisabled, minWidthRatio, maxHeightPx = 400, maxWidthRatio = 1, name, onChangeValue, onClose, placeholder, placeholderSearch, renderIconLeft = defaultRenderIconLeft, renderLabel = defaultRenderLabel, value, widthPx } = _ref1, restTriggerProps = _object_without_properties(_ref1, [
        "as",
        "children",
        "filterLogic",
        "id",
        "isFlipDisabled",
        "minWidthRatio",
        "maxHeightPx",
        "maxWidthRatio",
        "name",
        "onChangeValue",
        "onClose",
        "placeholder",
        "placeholderSearch",
        "renderIconLeft",
        "renderLabel",
        "value",
        "widthPx"
    ]), [forwardedRef] = _rest;
    const { refs, isOpen, close, triggerProps, floatingProps } = useFloatingDropdown({
        mainAxisOffset: 4,
        widthExtendPx: 1,
        minWidthRatio,
        maxWidthRatio,
        onClose,
        widthPx,
        closingKeyList: CLOSING_KEY_LIST,
        isFlipDisabled
    });
    const triggerRef = useMergeRefs(forwardedRef, refs.setReference);
    const [filteringPhrase, setFilteringPhrase] = useState('');
    const triggerId = useDomId(id);
    let selectedOptionPayload;
    let optionsCount = 0;
    const filteredChildList = react.Children.toArray(children).filter((child)=>{
        const optionPayload = findOptionDataInReactChild(child);
        if (optionPayload) {
            optionsCount += 1;
            if (optionPayload.value === value) selectedOptionPayload = {
                value: optionPayload.value,
                iconLeft: optionPayload.iconLeft,
                label: optionPayload.label
            };
            return filterLogic(filteringPhrase, optionPayload);
        }
        return true;
    });
    const handleSelectionChange = useCallback((payload)=>{
        var _ref;
        const optionValue = null != (_ref = null == payload ? void 0 : payload.value) ? _ref : '';
        null == onChangeValue || onChangeValue(optionValue, name);
    }, [
        onChangeValue,
        name
    ]);
    const triggerLabel = renderLabel(selectedOptionPayload);
    const shouldUsePlaceholderStyling = !triggerLabel;
    const shouldShowSearch = optionsCount >= OPTION_LIST_COUNT_TO_SHOW_SEARCH;
    const containerId = shouldShowSearch ? generateDialogDomId(triggerId, isOpen) : generateListboxDomId(triggerId, isOpen);
    const containerAriaHasPopup = shouldShowSearch ? 'dialog' : 'listbox';
    useEffect(()=>{
        if (isOpen) setFilteringPhrase('');
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement(TriggerComponent, _object_spread_props(_object_spread({}, restTriggerProps, triggerProps), {
        "aria-autocomplete": "none",
        "aria-controls": containerId,
        "aria-expanded": isOpen,
        "aria-haspopup": containerAriaHasPopup,
        className: STATIC_CLASS_NAME.dropdownTrigger,
        iconLeft: renderIconLeft(selectedOptionPayload),
        id: triggerId,
        isPlaceholder: shouldUsePlaceholderStyling,
        ref: triggerRef,
        role: "combobox"
    }), triggerLabel || placeholder || ''), isOpen && /*#__PURE__*/ react.createElement(Popover, _object_spread({
        isFocusLocked: false
    }, floatingProps), /*#__PURE__*/ react.createElement(InteractionSelectProvider, {
        selectedValue: value
    }, /*#__PURE__*/ react.createElement(InteractionHighlightProvider, null, /*#__PURE__*/ react.createElement(InteractionScrollProvider, null, /*#__PURE__*/ react.createElement(InteractionActionProvider, {
        defaultAction: handleSelectionChange,
        onPostAction: close
    }, /*#__PURE__*/ react.createElement(SelectInteractionsContainer, {
        "aria-label": restTriggerProps['aria-label'],
        "aria-labelledby": restTriggerProps['aria-labelledby'],
        id: containerId,
        maxHeightPx: maxHeightPx,
        searchOnChangeValue: setFilteringPhrase,
        searchPlaceholder: placeholderSearch,
        searchValue: filteringPhrase,
        shouldShowSearch: shouldShowSearch
    }, filteredChildList)))))));
});
export { Select };
