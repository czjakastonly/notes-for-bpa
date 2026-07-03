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
    SelectMultiple: ()=>SelectMultiple
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const mergeRefs_cjs_namespaceObject = require("../../utils/mergeRefs.cjs");
const index_cjs_namespaceObject = require("../List/index.cjs");
const external_ListBox_index_cjs_namespaceObject = require("../ListBox/index.cjs");
const external_Popover_index_cjs_namespaceObject = require("../Popover/index.cjs");
const ButtonFieldSelect_index_cjs_namespaceObject = require("../inputs/components/ButtonFieldSelect/index.cjs");
const external_Dropdown_index_cjs_namespaceObject = require("../Dropdown/index.cjs");
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const domId_cjs_namespaceObject = require("../../utils/domId.cjs");
const mergeClassNames_cjs_namespaceObject = require("../../utils/mergeClassNames.cjs");
const external_constants_cjs_namespaceObject = require("../../constants.cjs");
const ButtonMinimal_index_cjs_namespaceObject = require("../buttons/ButtonMinimal/index.cjs");
const external_Flex_index_cjs_namespaceObject = require("../Flex/index.cjs");
const ButtonPrimary_index_cjs_namespaceObject = require("../buttons/ButtonPrimary/index.cjs");
const helpers_cjs_namespaceObject = require("./_shared/helpers.cjs");
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
const UnstyledDiv = external_styled_components_default().div`
  outline: none;
`;
const UnstyledListBox = (0, external_ListBox_index_cjs_namespaceObject.withListBox)(UnstyledDiv);
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
const SelectMultiple = /*#__PURE__*/ external_react_default().forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { as: TriggerComponent = ButtonFieldSelect_index_cjs_namespaceObject.ButtonFieldSelect, children, filterLogic = defaultFilterLogic, id, name, labelApply = 'Apply', labelCancel = 'Cancel', maxHeightPx = 400, maxWidthRatio = 5, onChangeValueList, onClose, placeholder, renderIconLeft = defaultRenderIconLeft, renderLabel = defaultRenderLabel, valueList, widthPx, placeholderSearch } = _ref1, restTriggerProps = _object_without_properties(_ref1, [
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
    const [internalValueList, setInternalValueList] = (0, external_react_namespaceObject.useState)(valueList);
    const [filteringPhrase, setFilteringPhrase] = (0, external_react_namespaceObject.useState)('');
    const { refs, isOpen, close, triggerProps, floatingProps } = (0, external_Dropdown_index_cjs_namespaceObject.useFloatingDropdown)({
        mainAxisOffset: 4,
        widthExtendPx: 1,
        maxWidthRatio,
        onClose,
        closingKeyList: [
            'Escape'
        ],
        widthPx
    });
    const triggerRef = (0, mergeRefs_cjs_namespaceObject.useMergeRefs)(forwardedRef, refs.setReference);
    const domId = (0, domId_cjs_namespaceObject.useDomId)(id);
    const listboxId = (0, domId_cjs_namespaceObject.generateListboxDomId)(domId, isOpen);
    const selectedOptionPayloadByValue = {};
    const metadata = {
        isAllSelected: true
    };
    let optionsCount = 0;
    const filteredChildList = external_react_default().Children.toArray(children).filter((child)=>{
        const optionPayload = (0, helpers_cjs_namespaceObject.findOptionDataInReactChild)(child);
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
    const handleToggleSelection = (0, external_react_namespaceObject.useCallback)((optionPayload)=>{
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
    const handleApply = (0, external_react_namespaceObject.useCallback)(()=>{
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
    (0, external_react_namespaceObject.useEffect)(()=>{
        if (isOpen) setInternalValueList(valueList);
    }, [
        isOpen,
        valueListToken
    ]);
    return /*#__PURE__*/ external_react_default().createElement(external_react_default().Fragment, null, /*#__PURE__*/ external_react_default().createElement(TriggerComponent, _object_spread_props(_object_spread({}, restTriggerProps, triggerProps), {
        className: (0, mergeClassNames_cjs_namespaceObject.mergeClassNames)(external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.dropdownTrigger),
        id: domId,
        ref: triggerRef,
        "aria-controls": listboxId,
        iconLeft: renderIconLeft(valuePayloadList),
        isPlaceholder: shouldUsePlaceholderStyling
    }), triggerLabel || placeholder || ''), isOpen && /*#__PURE__*/ external_react_default().createElement(external_Popover_index_cjs_namespaceObject.Popover, _object_spread({
        isFocusLocked: true
    }, floatingProps), /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.List, null, /*#__PURE__*/ external_react_default().createElement(UnstyledListBox, {
        onAction: handleToggleSelection,
        value: internalValueList,
        autoFocus: !shouldShowAutocomplete,
        tabIndex: 0
    }, shouldShowAutocomplete && /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.ListHeader, null, /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.ListSearchInput, {
        value: filteringPhrase,
        onChangeValue: setFilteringPhrase,
        autoFocus: shouldShowAutocomplete,
        placeholder: placeholderSearch
    })), /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.ListBody, {
        style: {
            maxHeight: maxHeightPx
        }
    }, filteredChildList)), /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.ListFooter, null, /*#__PURE__*/ external_react_default().createElement(external_Flex_index_cjs_namespaceObject.RowFlex, {
        justifyContent: "space-between",
        paddingY: 1,
        paddingX: 1.5
    }, /*#__PURE__*/ external_react_default().createElement(ButtonMinimal_index_cjs_namespaceObject.ButtonMinimal, {
        size: "small",
        onClick: close,
        "data-action-cancel": true
    }, labelCancel), /*#__PURE__*/ external_react_default().createElement(ButtonPrimary_index_cjs_namespaceObject.ButtonPrimary, {
        size: "small",
        onClick: handleApply,
        "data-action-apply": true
    }, labelApply))))));
});
exports.SelectMultiple = __webpack_exports__.SelectMultiple;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "SelectMultiple"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
