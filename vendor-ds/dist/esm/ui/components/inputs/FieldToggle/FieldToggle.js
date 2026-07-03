import react, { forwardRef } from "react";
import { VisuallyHidden } from "../../VisuallyHidden/index.js";
import { useDomId } from "../../../utils/domId.js";
import { STATIC_CLASS_NAME } from "../../../constants.js";
import FieldToggle_styles from "./FieldToggle.styles.js";
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
function FieldToggle_ownKeys(object, enumerableOnly) {
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
    else FieldToggle_ownKeys(Object(source)).forEach(function(key) {
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
const FieldToggle = /*#__PURE__*/ forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { checked, disabled, id: domId, name, onChange, onChangeChecked, onKeyDown, size = 'standard' } = _ref1, restHtmlCheckboxProps = _object_without_properties(_ref1, [
        "checked",
        "disabled",
        "id",
        "name",
        "onChange",
        "onChangeChecked",
        "onKeyDown",
        "size"
    ]), [forwardedRef] = _rest;
    const id = useDomId(domId);
    const handleChange = (e)=>{
        if (!disabled) {
            const newChecked = !checked;
            null == onChange || onChange(e);
            null == onChangeChecked || onChangeChecked(newChecked, name);
        }
    };
    const handleKeyDown = (e)=>{
        null == onKeyDown || onKeyDown(e);
        if ('Enter' === e.key) handleChange(e);
    };
    return /*#__PURE__*/ react.createElement(FieldToggle_styles.Label, {
        $size: size
    }, /*#__PURE__*/ react.createElement(VisuallyHidden, _object_spread_props(_object_spread({}, restHtmlCheckboxProps), {
        as: "input",
        className: STATIC_CLASS_NAME.fieldToggle,
        ref: forwardedRef,
        name: name,
        disabled: disabled,
        id: id,
        type: "checkbox",
        checked: !!checked,
        onChange: handleChange,
        onKeyDown: handleKeyDown
    })), /*#__PURE__*/ react.createElement(FieldToggle_styles.Slider, {
        $size: size,
        $checked: !!checked,
        $disabled: disabled
    }));
});
export { FieldToggle };
