import react, { useRef } from "react";
import { useMergeRefs } from "../../../utils/mergeRefs.js";
import { STATIC_CLASS_NAME } from "../../../constants.js";
import FieldRange_styles from "./FieldRange.styles.js";
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
function FieldRange_ownKeys(object, enumerableOnly) {
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
    else FieldRange_ownKeys(Object(source)).forEach(function(key) {
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
const FieldRange = /*#__PURE__*/ react.forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { disabled, max = 100, min = 0, name, onChange, onChangeValue, status, step = 1, tabIndex = 0, value } = _ref1, restHtmlInputProps = _object_without_properties(_ref1, [
        "disabled",
        "max",
        "min",
        "name",
        "onChange",
        "onChangeValue",
        "status",
        "step",
        "tabIndex",
        "value"
    ]), [forwardedRef] = _rest;
    const inputRefInternal = useRef(null);
    const inputRef = useMergeRefs(inputRefInternal, forwardedRef);
    const valueNum = Number(value);
    const range = valueNum ? (valueNum - min) * 100 / (max - min) : 0;
    const handleContainerClick = ()=>{
        if (inputRefInternal.current) inputRefInternal.current.focus();
    };
    const handleChange = (e)=>{
        if (!disabled) {
            null == onChange || onChange(e);
            null == onChangeValue || onChangeValue(e.target.value, name);
        }
    };
    return /*#__PURE__*/ react.createElement(FieldRange_styles.Container, {
        onClick: handleContainerClick,
        tabIndex: -1
    }, /*#__PURE__*/ react.createElement(FieldRange_styles.BarBg, null), /*#__PURE__*/ react.createElement(FieldRange_styles.Bar, {
        style: {
            width: `${range}%`
        }
    }), /*#__PURE__*/ react.createElement(FieldRange_styles.Slider, _object_spread_props(_object_spread({}, restHtmlInputProps), {
        className: STATIC_CLASS_NAME.field,
        "aria-invalid": 'error' === status,
        disabled: disabled,
        max: max,
        min: min,
        name: name,
        onChange: handleChange,
        ref: inputRef,
        step: step,
        type: "range",
        value: valueNum,
        tabIndex: tabIndex
    })));
});
export { FieldRange };
