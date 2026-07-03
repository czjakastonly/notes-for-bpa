import react, { useCallback, useEffect, useState } from "react";
import { Calendar } from "../../Calendar/index.js";
import { today } from "../../Calendar/Calendar.consts.js";
import { isValidDate } from "../../Calendar/Calendar.helpers.js";
import { FieldText } from "../FieldText/index.js";
import { useFloatingDropdown } from "../../Dropdown/useFloatingDropdown.js";
import { Popover } from "../../Popover/index.js";
import { useDomId } from "../../../utils/domId.js";
import Calendar_16 from "../../../atoms/icons/Calendar-16.js";
import { getDateString, parseDateString, userDateFormat } from "./FieldDate.helpers.js";
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
    let { id: domId, required, value, onChange, status, isFutureDisabled, isPastDisabled, dateFormat = userDateFormat, disabled, translations } = _0, restFieldTextProps = _object_without_properties(_0, [
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
    const [internalDateStringValue, setInternalDateStringValue] = useState(()=>getDateString(value, dateFormat));
    const [internalDateValue, setInternalDateValue] = useState(()=>parseDateString(internalDateStringValue, dateFormat));
    const id = useDomId(domId);
    const popoverId = id ? `${id}:popover` : void 0;
    const { triggerProps, floatingProps, isOpen, close, open } = useFloatingDropdown({
        widthPx: 312,
        minWidthRatio: 0,
        maxWidthRatio: 2,
        closingKeyList: [
            'Escape'
        ]
    });
    const validateDateValue = useCallback((date)=>{
        if (!isValidDate(date)) return false;
        if (isPastDisabled && date < today) return false;
        if (isFutureDisabled && date > today) return false;
        return true;
    }, [
        isPastDisabled,
        isFutureDisabled
    ]);
    const onKeyDown = useCallback((e)=>{
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
    const onClick = useCallback((e)=>{
        open();
        e.preventDefault();
    }, [
        open
    ]);
    const onBlur = useCallback(()=>{
        if (!internalDateValue) return void (null == onChange || onChange(void 0));
        const isValid = validateDateValue(internalDateValue);
        if (isValid) {
            setInternalDateStringValue(getDateString(internalDateValue, dateFormat));
            null == onChange || onChange(internalDateValue);
        }
    }, [
        internalDateValue,
        dateFormat,
        onChange,
        validateDateValue
    ]);
    const onInternalDateStringValueChange = useCallback((newValue)=>{
        setInternalDateStringValue(newValue);
        if (!newValue) return void setInternalDateValue(void 0);
        const potentialDate = parseDateString(newValue, dateFormat);
        const isValid = validateDateValue(potentialDate);
        if (isValid) setInternalDateValue(potentialDate);
    }, [
        validateDateValue,
        dateFormat
    ]);
    const onCalendarSelect = (date)=>{
        null == onChange || onChange(date);
        setInternalDateValue(date);
        setInternalDateStringValue(getDateString(date, dateFormat));
        close();
    };
    useEffect(()=>{
        const newInternalDateStringValue = getDateString(value, dateFormat);
        const newInternalDate = parseDateString(newInternalDateStringValue, dateFormat);
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
    return /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement(FieldText, _object_spread_props(_object_spread(_object_spread_props(_object_spread({
        id: id,
        placeholder: dateFormat,
        required: required,
        status: status,
        disabled: disabled,
        iconLeft: /*#__PURE__*/ react.createElement(Calendar_16, null)
    }, restFieldTextProps), {
        value: internalDateStringValue,
        onChangeValue: onInternalDateStringValueChange
    }), triggerProps), {
        onKeyDown: onKeyDown,
        onBlur: onBlur,
        onClick: onClick,
        "aria-controls": popoverId,
        "aria-haspopup": "dialog"
    })), isOpen && /*#__PURE__*/ react.createElement(Popover, _object_spread_props(_object_spread({}, floatingProps), {
        isFocusLocked: true,
        id: popoverId
    }), /*#__PURE__*/ react.createElement(Calendar, {
        onSelect: onCalendarSelect,
        isFutureDisabled: isFutureDisabled,
        isPastDisabled: isPastDisabled,
        value: internalDateValue,
        translations: translations
    })));
};
export { FieldDate };
