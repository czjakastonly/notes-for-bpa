import react, { forwardRef, useRef, useState } from "react";
import { useMergeRefs } from "../../../utils/mergeRefs.js";
import { useTheme } from "styled-components";
import { renderStatusIconForInputStatus, resolveBorderColorForInputStatus, resolveIconColorForInputStatus } from "../_shared/helpers.js";
import { STATIC_CLASS_NAME } from "../../../constants.js";
import { FieldStyles } from "../_shared/Field.styles.js";
import { Arrows } from "./Arrows.js";
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
function FieldNumber_ownKeys(object, enumerableOnly) {
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
    else FieldNumber_ownKeys(Object(source)).forEach(function(key) {
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
const ARROW_KEY = {
    down: 'ArrowDown',
    up: 'ArrowUp'
};
const FieldNumber = /*#__PURE__*/ forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { disabled, iconLeft, iconUnits, integerOnly = false, max = Number.MAX_SAFE_INTEGER, min = 0, name = '', onChangeValue, onKeyDown, status, tabIndex, value = '', additionalActionNode } = _ref1, restInputHtmlProps = _object_without_properties(_ref1, [
        "disabled",
        "iconLeft",
        "iconUnits",
        "integerOnly",
        "max",
        "min",
        "name",
        "onChangeValue",
        "onKeyDown",
        "status",
        "tabIndex",
        "value",
        "additionalActionNode"
    ]), [forwardedRef] = _rest;
    if (min > max) throw new Error(`STON_UI_ERROR: FieldNumber min >= max ${JSON.stringify({
        min,
        max
    })}`);
    const theme = useTheme();
    const inputRefInternal = useRef(null);
    const inputRef = useMergeRefs(inputRefInternal, forwardedRef);
    const [arrowHoldingKey, setArrowHoldingKey] = useState('');
    const statusIcon = renderStatusIconForInputStatus(status);
    const statusIconColor = resolveIconColorForInputStatus(theme, status);
    const statusBorderColor = resolveBorderColorForInputStatus(theme, status);
    const resetArrowHoldingKey = ()=>{
        setArrowHoldingKey('');
    };
    const parseValue = (val)=>{
        const valueToUse = 'string' == typeof val && integerOnly ? val.replace('.', '') : val;
        const parsedValue = Number(valueToUse);
        return Number.isNaN(parsedValue) ? 0 : parsedValue;
    };
    const triggerChangeValue = (val)=>{
        if (!disabled) return void (null == onChangeValue || onChangeValue(val, name));
    };
    const updateValue = (val)=>{
        if ('' === val) return void (null == triggerChangeValue || triggerChangeValue(val));
        const parsedValue = parseValue(val);
        let finalValue = parsedValue;
        if (parsedValue >= max) finalValue = max;
        if (parsedValue <= min) finalValue = min;
        null == triggerChangeValue || triggerChangeValue(String(finalValue));
    };
    const incrementCurrentValue = ()=>{
        updateValue(parseValue(value) + 1);
    };
    const decrementCurrentValue = ()=>{
        updateValue(parseValue(value) - 1);
    };
    const handleContainerClick = ()=>{
        if (inputRefInternal.current) inputRefInternal.current.focus();
    };
    const handleInputChange = (e)=>{
        updateValue(e.target.value);
    };
    const handleInputKeyDown = (e)=>{
        null == onKeyDown || onKeyDown(e);
        if (e.key === ARROW_KEY.up) {
            e.preventDefault();
            incrementCurrentValue();
            setArrowHoldingKey(e.key);
        } else if (e.key === ARROW_KEY.down) {
            e.preventDefault();
            decrementCurrentValue();
            setArrowHoldingKey(e.key);
        } else resetArrowHoldingKey();
    };
    const parsedValue = '' === value ? '' : String(parseValue(value));
    return /*#__PURE__*/ react.createElement(FieldStyles.FieldWrap, {
        $borderColor: statusBorderColor
    }, /*#__PURE__*/ react.createElement(FieldStyles.InputElementWrap, {
        onClick: handleContainerClick,
        $disabled: disabled
    }, iconLeft && /*#__PURE__*/ react.createElement(FieldStyles.IconLeftWrap, {
        "aria-hidden": true
    }, iconLeft), /*#__PURE__*/ react.createElement(FieldStyles.InputElement, _object_spread_props(_object_spread({}, restInputHtmlProps), {
        "aria-invalid": 'error' === status,
        autoComplete: "off",
        className: STATIC_CLASS_NAME.field,
        disabled: disabled,
        name: name,
        onChange: handleInputChange,
        onKeyDown: handleInputKeyDown,
        onKeyUp: resetArrowHoldingKey,
        readOnly: !onChangeValue,
        ref: inputRef,
        tabIndex: tabIndex,
        type: "number",
        value: parsedValue
    })), iconUnits && /*#__PURE__*/ react.createElement(FieldStyles.IconUnitsWrap, {
        "aria-hidden": true
    }, iconUnits), statusIcon && !additionalActionNode && /*#__PURE__*/ react.createElement(FieldStyles.IconRightWrap, {
        "aria-hidden": true,
        $color: statusIconColor
    }, statusIcon), /*#__PURE__*/ react.createElement(FieldStyles.IconRightWrap, {
        "aria-hidden": true
    }, /*#__PURE__*/ react.createElement(Arrows, {
        disabled: disabled,
        isDownActive: arrowHoldingKey === ARROW_KEY.down,
        isUpActive: arrowHoldingKey === ARROW_KEY.up,
        onDownClick: decrementCurrentValue,
        onUpClick: incrementCurrentValue
    }))), !!additionalActionNode && /*#__PURE__*/ react.createElement(FieldStyles.ButtonElementWrap, null, additionalActionNode));
});
export { FieldNumber };
