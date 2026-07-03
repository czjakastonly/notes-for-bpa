import react, { useCallback, useEffect, useState } from "react";
import { useMergeRefs } from "../../utils/mergeRefs.js";
import { List, ListBody, ListFooter, ListHeader, ListSearchInput } from "../List/index.js";
import { withListBox } from "../ListBox/index.js";
import { Popover } from "../Popover/index.js";
import { ButtonFieldSelect } from "../inputs/components/ButtonFieldSelect/index.js";
import { useFloatingDropdown } from "../Dropdown/index.js";
import styled_components from "styled-components";
import { generateListboxDomId, useDomId } from "../../utils/domId.js";
import { mergeClassNames } from "../../utils/mergeClassNames.js";
import { STATIC_CLASS_NAME } from "../../constants.js";
import { ButtonMinimal } from "../buttons/ButtonMinimal/index.js";
import { RowFlex } from "../Flex/index.js";
import { ButtonPrimary } from "../buttons/ButtonPrimary/index.js";
import { findOptionDataInReactChild } from "./_shared/helpers.js";
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
function SelectMultiple_ownKeys(object, enumerableOnly) {
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
    else SelectMultiple_ownKeys(Object(source)).forEach(function(key) {
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
const OPTION_LIST_COUNT_TO_SHOW_AUTOCOMPLETE = 7;
const UnstyledDiv = styled_components.div`
  outline: none;
`;
const UnstyledListBox = withListBox(UnstyledDiv);
const defaultRenderIconLeft = (optionData)=>{
    var _optionData_;
    return null == optionData ? void 0 : null == (_optionData_ = optionData[0]) ? void 0 : _optionData_.iconLeft;
};
const defaultRenderLabel = (optionData)=>null == optionData ? void 0 : optionData.map((opt)=>opt.label || opt.value).join(', ');
const defaultFilterLogic = (phrase, optionData)=>{
    if (optionData && phrase) {
        var _optionData_label;
        const lowerPhrase = phrase.toLowerCase();
        return (null == (_optionData_label = optionData.label) ? void 0 : _optionData_label.toLowerCase().includes(lowerPhrase)) || String(optionData.value).toLowerCase().includes(lowerPhrase);
    }
    return true;
};
const SelectMultiple = /*#__PURE__*/ react.forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { as: TriggerComponent = ButtonFieldSelect, children, filterLogic = defaultFilterLogic, id, name, labelApply = 'Apply', labelCancel = 'Cancel', maxHeightPx = 400, maxWidthRatio = 5, onChangeValueList, onClose, placeholder, renderIconLeft = defaultRenderIconLeft, renderLabel = defaultRenderLabel, valueList, widthPx, placeholderSearch } = _ref1, restTriggerProps = _object_without_properties(_ref1, [
        "as",
        "children",
        "filterLogic",
        "id",
        "name",
        "labelApply",
        "labelCancel",
        "maxHeightPx",
        "maxWidthRatio",
        "onChangeValueList",
        "onClose",
        "placeholder",
        "renderIconLeft",
        "renderLabel",
        "valueList",
        "widthPx",
        "placeholderSearch"
    ]), [forwardedRef] = _rest;
    const [internalValueList, setInternalValueList] = useState(valueList);
    const [filteringPhrase, setFilteringPhrase] = useState('');
    const { refs, isOpen, close, triggerProps, floatingProps } = useFloatingDropdown({
        mainAxisOffset: 4,
        widthExtendPx: 1,
        maxWidthRatio,
        onClose,
        closingKeyList: [
            'Escape'
        ],
        widthPx
    });
    const triggerRef = useMergeRefs(forwardedRef, refs.setReference);
    const domId = useDomId(id);
    const listboxId = generateListboxDomId(domId, isOpen);
    const selectedOptionPayloadByValue = {};
    const metadata = {
        isAllSelected: true
    };
    let optionsCount = 0;
    const filteredChildList = react.Children.toArray(children).filter((child)=>{
        const optionPayload = findOptionDataInReactChild(child);
        if (optionPayload) {
            optionsCount += 1;
            if (valueList.includes(optionPayload.value)) selectedOptionPayloadByValue[optionPayload.value] = {
                value: optionPayload.value,
                iconLeft: optionPayload.iconLeft,
                label: optionPayload.label
            };
            else metadata.isAllSelected = false;
            return filterLogic(filteringPhrase, optionPayload);
        }
        return true;
    });
    const handleToggleSelection = useCallback((optionPayload)=>{
        var _ref;
        const optionValue = null != (_ref = null == optionPayload ? void 0 : optionPayload.value) ? _ref : '';
        const newInternalValueList = internalValueList.includes(optionValue) ? internalValueList.filter((v)=>v !== optionValue) : [
            ...internalValueList,
            optionValue
        ];
        setInternalValueList(newInternalValueList);
    }, [
        internalValueList
    ]);
    const handleApply = useCallback(()=>{
        null == onChangeValueList || onChangeValueList(internalValueList, name);
        close();
    }, [
        onChangeValueList,
        internalValueList,
        close,
        name
    ]);
    const valuePayloadList = Object.values(selectedOptionPayloadByValue);
    const triggerLabel = renderLabel(valuePayloadList);
    const shouldUsePlaceholderStyling = !triggerLabel;
    const shouldShowAutocomplete = optionsCount >= OPTION_LIST_COUNT_TO_SHOW_AUTOCOMPLETE;
    const valueListToken = valueList.join('');
    useEffect(()=>{
        if (isOpen) setInternalValueList(valueList);
    }, [
        isOpen,
        valueListToken
    ]);
    return /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement(TriggerComponent, _object_spread_props(_object_spread({}, restTriggerProps, triggerProps), {
        className: mergeClassNames(STATIC_CLASS_NAME.dropdownTrigger),
        id: domId,
        ref: triggerRef,
        "aria-controls": listboxId,
        iconLeft: renderIconLeft(valuePayloadList),
        isPlaceholder: shouldUsePlaceholderStyling
    }), triggerLabel || placeholder || ''), isOpen && /*#__PURE__*/ react.createElement(Popover, _object_spread({
        isFocusLocked: true
    }, floatingProps), /*#__PURE__*/ react.createElement(List, null, /*#__PURE__*/ react.createElement(UnstyledListBox, {
        onAction: handleToggleSelection,
        value: internalValueList,
        autoFocus: !shouldShowAutocomplete,
        tabIndex: 0
    }, shouldShowAutocomplete && /*#__PURE__*/ react.createElement(ListHeader, null, /*#__PURE__*/ react.createElement(ListSearchInput, {
        value: filteringPhrase,
        onChangeValue: setFilteringPhrase,
        autoFocus: shouldShowAutocomplete,
        placeholder: placeholderSearch
    })), /*#__PURE__*/ react.createElement(ListBody, {
        style: {
            maxHeight: maxHeightPx
        }
    }, filteredChildList)), /*#__PURE__*/ react.createElement(ListFooter, null, /*#__PURE__*/ react.createElement(RowFlex, {
        justifyContent: "space-between",
        paddingY: 1,
        paddingX: 1.5
    }, /*#__PURE__*/ react.createElement(ButtonMinimal, {
        size: "small",
        onClick: close,
        "data-action-cancel": true
    }, labelCancel), /*#__PURE__*/ react.createElement(ButtonPrimary, {
        size: "small",
        onClick: handleApply,
        "data-action-apply": true
    }, labelApply))))));
});
export { SelectMultiple };
