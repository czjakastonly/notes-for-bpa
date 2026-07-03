import react from "react";
import { InputWrap } from "../components/InputWrap/index.js";
import { generateDescribeDomId, generateLabelDomId, useDomId } from "../../../utils/domId.js";
import { FieldDate } from "../FieldDate/index.js";
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
const InputDate = (_0)=>{
    let { className, id: domId, label, message, required, tooltip, value, onChange, status, isFutureDisabled, isPastDisabled, dateFormat, disabled } = _0, restFieldTextProps = _object_without_properties(_0, [
        "className",
        "id",
        "label",
        "message",
        "required",
        "tooltip",
        "value",
        "onChange",
        "status",
        "isFutureDisabled",
        "isPastDisabled",
        "dateFormat",
        "disabled"
    ]);
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
        tooltip: tooltip,
        status: status
    }, /*#__PURE__*/ react.createElement(FieldDate, _object_spread({
        id: id,
        required: required,
        "aria-describedby": messageDomId,
        "aria-labelledby": labelDomId,
        value: value,
        onChange: onChange,
        status: status,
        isFutureDisabled: isFutureDisabled,
        isPastDisabled: isPastDisabled,
        dateFormat: dateFormat,
        disabled: disabled
    }, restFieldTextProps)));
};
export { InputDate };
