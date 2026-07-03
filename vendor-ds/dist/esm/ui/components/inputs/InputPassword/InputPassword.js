import react, { forwardRef, useEffect, useRef, useState } from "react";
import styled_components, { css } from "styled-components";
import { InputWrap } from "../components/InputWrap/index.js";
import Eye_16 from "../../../atoms/icons/Eye-16.js";
import Eye_crossed_16 from "../../../atoms/icons/Eye-crossed-16.js";
import { generateDescribeDomId, generateLabelDomId, useDomId } from "../../../utils/domId.js";
import { TooltipIcon } from "../../Tooltip/index.js";
import { FieldText } from "../FieldText/index.js";
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
function InputPassword_ownKeys(object, enumerableOnly) {
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
    else InputPassword_ownKeys(Object(source)).forEach(function(key) {
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
const eyeIconStyle = css`
  cursor: pointer;
  path {
    transition: fill 0.2s;
  }

  &:hover {
    path {
      fill: ${({ theme })=>theme.color.iconHover};
    }
  }
`;
const EyeIcon = styled_components(Eye_16)`
  ${eyeIconStyle}
`;
const EyeIconCrossed = styled_components(Eye_crossed_16)`
  ${eyeIconStyle}
`;
const InputPassword = /*#__PURE__*/ forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { className, id: domId, label, message, required, status, tooltip, onFocus, onBlur } = _ref1, restFieldTextProps = _object_without_properties(_ref1, [
        "className",
        "id",
        "label",
        "message",
        "required",
        "status",
        "tooltip",
        "onFocus",
        "onBlur"
    ]), [forwardedRef] = _rest;
    const id = useDomId(domId);
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const describedbyDomId = generateDescribeDomId(id, !!message);
    const labelDomId = generateLabelDomId(id, !!label);
    const tooltipRef = useRef(null);
    const onFocusProxy = (e)=>{
        var _tooltipRef_current_open, _tooltipRef_current;
        null == (_tooltipRef_current = tooltipRef.current) || null == (_tooltipRef_current_open = _tooltipRef_current.open) || _tooltipRef_current_open.call(_tooltipRef_current);
        null == onFocus || onFocus(e);
    };
    const onBlurProxy = (e)=>{
        var _tooltipRef_current_close, _tooltipRef_current;
        null == (_tooltipRef_current = tooltipRef.current) || null == (_tooltipRef_current_close = _tooltipRef_current.close) || _tooltipRef_current_close.call(_tooltipRef_current);
        null == onBlur || onBlur(e);
        setIsPasswordShown(false);
    };
    useEffect(()=>{
        if (restFieldTextProps.value) {
            var _tooltipRef_current_open, _tooltipRef_current;
            null == (_tooltipRef_current = tooltipRef.current) || null == (_tooltipRef_current_open = _tooltipRef_current.open) || _tooltipRef_current_open.call(_tooltipRef_current);
        }
    }, [
        restFieldTextProps.value
    ]);
    return /*#__PURE__*/ react.createElement(InputWrap, {
        className: className,
        label: /*#__PURE__*/ react.createElement(react.Fragment, null, label, tooltip && /*#__PURE__*/ react.createElement(TooltipIcon, {
            ref: tooltipRef
        }, tooltip)),
        labelDomId: labelDomId,
        message: message,
        messageDomId: describedbyDomId,
        required: required,
        status: status
    }, /*#__PURE__*/ react.createElement(FieldText, _object_spread_props(_object_spread({}, restFieldTextProps), {
        "aria-describedby": describedbyDomId,
        "aria-labelledby": labelDomId,
        onBlur: onBlurProxy,
        onFocus: onFocusProxy,
        id: id,
        ref: forwardedRef,
        required: required,
        status: status,
        type: isPasswordShown ? 'text' : 'password',
        iconRight: isPasswordShown ? /*#__PURE__*/ react.createElement(EyeIconCrossed, {
            tabIndex: 0,
            role: "switch",
            onClick: ()=>setIsPasswordShown(false),
            onKeyDown: (e)=>{
                if ('Enter' === e.key) setIsPasswordShown(false);
            }
        }) : /*#__PURE__*/ react.createElement(EyeIcon, {
            tabIndex: 0,
            role: "switch",
            onClick: ()=>setIsPasswordShown(true),
            onKeyDown: (e)=>{
                if ('Enter' === e.key) setIsPasswordShown(true);
            }
        })
    })));
});
export { InputPassword };
