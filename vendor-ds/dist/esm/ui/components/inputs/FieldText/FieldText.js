import react, { forwardRef, useRef } from "react";
import { useMergeRefs } from "../../../utils/mergeRefs.js";
import { useTheme } from "styled-components";
import { renderStatusIconForInputStatus, resolveBorderColorForInputStatus, resolveIconColorForInputStatus } from "../_shared/helpers.js";
import { STATIC_CLASS_NAME } from "../../../constants.js";
import { FieldStyles } from "../_shared/Field.styles.js";
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
function FieldText_ownKeys(object, enumerableOnly) {
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
    else FieldText_ownKeys(Object(source)).forEach(function(key) {
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
const FieldText = /*#__PURE__*/ forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { additionalActionNode, disabled, iconLeft, iconRight, iconUnits, name, onChange, onChangeValue, status, tabIndex, value = '', type = 'text' } = _ref1, restInputHtmlProps = _object_without_properties(_ref1, [
        "additionalActionNode",
        "disabled",
        "iconLeft",
        "iconRight",
        "iconUnits",
        "name",
        "onChange",
        "onChangeValue",
        "status",
        "tabIndex",
        "value",
        "type"
    ]), [forwardedRef] = _rest;
    const inputRefInternal = useRef(null);
    const inputRef = useMergeRefs(inputRefInternal, forwardedRef);
    const theme = useTheme();
    const statusIcon = renderStatusIconForInputStatus(status);
    const statusIconColor = resolveIconColorForInputStatus(theme, status);
    const statusBorderColor = resolveBorderColorForInputStatus(theme, status);
    const handleContainerClick = ()=>{
        if (inputRefInternal.current) inputRefInternal.current.focus();
    };
    const handleChange = (e)=>{
        if (!disabled) {
            null == onChange || onChange(e);
            null == onChangeValue || onChangeValue(e.target.value, name);
        }
    };
    return /*#__PURE__*/ react.createElement(FieldStyles.FieldWrap, {
        $borderColor: statusBorderColor
    }, /*#__PURE__*/ react.createElement(FieldStyles.InputElementWrap, {
        $disabled: disabled,
        onClick: handleContainerClick
    }, iconLeft && /*#__PURE__*/ react.createElement(FieldStyles.IconLeftWrap, {
        "aria-hidden": true
    }, iconLeft), /*#__PURE__*/ react.createElement(FieldStyles.InputElement, _object_spread_props(_object_spread({}, restInputHtmlProps), {
        "aria-invalid": 'error' === status,
        className: STATIC_CLASS_NAME.field,
        disabled: disabled,
        name: name,
        onChange: handleChange,
        readOnly: !onChange && !onChangeValue,
        ref: inputRef,
        tabIndex: tabIndex,
        type: type,
        value: value
    })), iconUnits && /*#__PURE__*/ react.createElement(FieldStyles.IconUnitsWrap, {
        "aria-hidden": true
    }, iconUnits), statusIcon && !additionalActionNode && /*#__PURE__*/ react.createElement(FieldStyles.IconRightWrap, {
        "aria-hidden": true,
        $color: statusIconColor
    }, statusIcon), iconRight && /*#__PURE__*/ react.createElement(FieldStyles.IconRightWrap, {
        "aria-hidden": true
    }, iconRight)), !!additionalActionNode && /*#__PURE__*/ react.createElement(FieldStyles.ButtonElementWrap, null, additionalActionNode));
});
export { FieldText };
