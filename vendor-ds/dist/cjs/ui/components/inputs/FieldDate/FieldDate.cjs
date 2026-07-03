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
    FieldDate: ()=>FieldDate
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const index_cjs_namespaceObject = require("../../Calendar/index.cjs");
const Calendar_consts_cjs_namespaceObject = require("../../Calendar/Calendar.consts.cjs");
const Calendar_helpers_cjs_namespaceObject = require("../../Calendar/Calendar.helpers.cjs");
const external_FieldText_index_cjs_namespaceObject = require("../FieldText/index.cjs");
const useFloatingDropdown_cjs_namespaceObject = require("../../Dropdown/useFloatingDropdown.cjs");
const external_Popover_index_cjs_namespaceObject = require("../../Popover/index.cjs");
const domId_cjs_namespaceObject = require("../../../utils/domId.cjs");
const Calendar_16_cjs_namespaceObject = require("../../../atoms/icons/Calendar-16.cjs");
var Calendar_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(Calendar_16_cjs_namespaceObject);
const external_FieldDate_helpers_cjs_namespaceObject = require("./FieldDate.helpers.cjs");
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
function FieldDate_ownKeys(object, enumerableOnly) {
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
    else FieldDate_ownKeys(Object(source)).forEach(function(key) {
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
const FieldDate = (_0)=>{
    let { id: domId, required, value, onChange, status, isFutureDisabled, isPastDisabled, dateFormat = external_FieldDate_helpers_cjs_namespaceObject.userDateFormat, disabled, translations } = _0, restFieldTextProps = _object_without_properties(_0, [
        "id",
        "required",
        "value",
        "onChange",
        "status",
        "isFutureDisabled",
        "isPastDisabled",
        "dateFormat",
        "disabled",
        "translations"
    ]);
    const [internalDateStringValue, setInternalDateStringValue] = (0, external_react_namespaceObject.useState)(()=>(0, external_FieldDate_helpers_cjs_namespaceObject.getDateString)(value, dateFormat));
    const [internalDateValue, setInternalDateValue] = (0, external_react_namespaceObject.useState)(()=>(0, external_FieldDate_helpers_cjs_namespaceObject.parseDateString)(internalDateStringValue, dateFormat));
    const id = (0, domId_cjs_namespaceObject.useDomId)(domId);
    const popoverId = id ? `${id}:popover` : void 0;
    const { triggerProps, floatingProps, isOpen, close, open } = (0, useFloatingDropdown_cjs_namespaceObject.useFloatingDropdown)({
        widthPx: 312,
        minWidthRatio: 0,
        maxWidthRatio: 2,
        closingKeyList: [
            'Escape'
        ]
    });
    const validateDateValue = (0, external_react_namespaceObject.useCallback)((date)=>{
        if (!(0, Calendar_helpers_cjs_namespaceObject.isValidDate)(date)) return false;
        if (isPastDisabled && date < Calendar_consts_cjs_namespaceObject.today) return false;
        if (isFutureDisabled && date > Calendar_consts_cjs_namespaceObject.today) return false;
        return true;
    }, [
        isPastDisabled,
        isFutureDisabled
    ]);
    const onKeyDown = (0, external_react_namespaceObject.useCallback)((e)=>{
        if (isOpen && [
            'ArrowDown',
            'Enter'
        ].includes(e.key)) {
            open();
            e.preventDefault();
        }
        if (!isOpen && [
            'ArrowUp',
            'Escape'
        ].includes(e.key)) {
            close();
            e.preventDefault();
        }
        if (!isOpen && ![
            'Tab',
            'Escape'
        ].includes(e.key)) requestAnimationFrame(open);
    }, [
        open,
        close,
        isOpen
    ]);
    const onClick = (0, external_react_namespaceObject.useCallback)((e)=>{
        open();
        e.preventDefault();
    }, [
        open
    ]);
    const onBlur = (0, external_react_namespaceObject.useCallback)(()=>{
        if (!internalDateValue) return void (null == onChange || onChange(void 0));
        const isValid = validateDateValue(internalDateValue);
        if (isValid) {
            setInternalDateStringValue((0, external_FieldDate_helpers_cjs_namespaceObject.getDateString)(internalDateValue, dateFormat));
            null == onChange || onChange(internalDateValue);
        }
    }, [
        internalDateValue,
        dateFormat,
        onChange,
        validateDateValue
    ]);
    const onInternalDateStringValueChange = (0, external_react_namespaceObject.useCallback)((newValue)=>{
        setInternalDateStringValue(newValue);
        if (!newValue) return void setInternalDateValue(void 0);
        const potentialDate = (0, external_FieldDate_helpers_cjs_namespaceObject.parseDateString)(newValue, dateFormat);
        const isValid = validateDateValue(potentialDate);
        if (isValid) setInternalDateValue(potentialDate);
    }, [
        validateDateValue,
        dateFormat
    ]);
    const onCalendarSelect = (date)=>{
        null == onChange || onChange(date);
        setInternalDateValue(date);
        setInternalDateStringValue((0, external_FieldDate_helpers_cjs_namespaceObject.getDateString)(date, dateFormat));
        close();
    };
    (0, external_react_namespaceObject.useEffect)(()=>{
        const newInternalDateStringValue = (0, external_FieldDate_helpers_cjs_namespaceObject.getDateString)(value, dateFormat);
        const newInternalDate = (0, external_FieldDate_helpers_cjs_namespaceObject.parseDateString)(newInternalDateStringValue, dateFormat);
        if (!newInternalDateStringValue) {
            setInternalDateStringValue(void 0);
            setInternalDateValue(void 0);
            return;
        }
        const isValid = validateDateValue(newInternalDate);
        if (isValid) {
            setInternalDateStringValue(newInternalDateStringValue);
            setInternalDateValue(newInternalDate);
        }
    }, [
        value,
        dateFormat,
        validateDateValue
    ]);
    return /*#__PURE__*/ external_react_default().createElement(external_react_default().Fragment, null, /*#__PURE__*/ external_react_default().createElement(external_FieldText_index_cjs_namespaceObject.FieldText, _object_spread_props(_object_spread(_object_spread_props(_object_spread({
        id: id,
        placeholder: dateFormat,
        required: required,
        status: status,
        disabled: disabled,
        iconLeft: /*#__PURE__*/ external_react_default().createElement(Calendar_16_cjs_default(), null)
    }, restFieldTextProps), {
        value: internalDateStringValue,
        onChangeValue: onInternalDateStringValueChange
    }), triggerProps), {
        onKeyDown: onKeyDown,
        onBlur: onBlur,
        onClick: onClick,
        "aria-controls": popoverId,
        "aria-haspopup": "dialog"
    })), isOpen && /*#__PURE__*/ external_react_default().createElement(external_Popover_index_cjs_namespaceObject.Popover, _object_spread_props(_object_spread({}, floatingProps), {
        isFocusLocked: true,
        id: popoverId
    }), /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.Calendar, {
        onSelect: onCalendarSelect,
        isFutureDisabled: isFutureDisabled,
        isPastDisabled: isPastDisabled,
        value: internalDateValue,
        translations: translations
    })));
};
exports.FieldDate = __webpack_exports__.FieldDate;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "FieldDate"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
