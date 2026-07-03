import react, { forwardRef } from "react";
import { InputWrap } from "../components/InputWrap/index.js";
import { generateDescribeDomId, generateLabelDomId, useDomId } from "../../../utils/domId.js";
import { FieldSearch } from "../FieldSearch/index.js";
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
function InputSearch_ownKeys(object, enumerableOnly) {
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
    else InputSearch_ownKeys(Object(source)).forEach(function(key) {
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
const InputSearch = /*#__PURE__*/ forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { className, id: domId, label, message, required, status, tooltip } = _ref1, restFieldTextProps = _object_without_properties(_ref1, [
        "className",
        "id",
        "label",
        "message",
        "required",
        "status",
        "tooltip"
    ]), [forwardedRef] = _rest;
    const id = useDomId(domId);
    const labelDomId = generateLabelDomId(id, !!label);
    const messageDomId = generateDescribeDomId(id, !!message);
    return /*#__PURE__*/ react.createElement(InputWrap, {
        className: className,
        label: label,
        labelDomId: labelDomId,
        message: message,
        messageDomId: messageDomId,
        required: required,
        status: status,
        tooltip: tooltip
    }, /*#__PURE__*/ react.createElement(FieldSearch, _object_spread_props(_object_spread({
        "aria-describedby": messageDomId,
        "aria-labelledby": labelDomId
    }, restFieldTextProps), {
        id: id,
        ref: forwardedRef,
        required: required,
        status: status
    })));
});
export { InputSearch };
