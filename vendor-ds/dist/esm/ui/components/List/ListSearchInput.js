import react, { useRef } from "react";
import styled_components, { css } from "styled-components";
import { useMergeRefs } from "../../utils/mergeRefs.js";
import Search from "../../atoms/icons/Search.js";
import CrossSmall from "../../atoms/icons/CrossSmall.js";
import { ListItemStyles } from "./_shared/styles.js";
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
function ListSearchInput_ownKeys(object, enumerableOnly) {
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
    else ListSearchInput_ownKeys(Object(source)).forEach(function(key) {
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
const CrossIcon = styled_components(CrossSmall)`
  margin-left: auto;
  margin-top: 4px;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  display: none;

  path {
    fill: ${(props)=>props.theme.color.iconDefault};
  }

  ${({ $isVisible })=>$isVisible && css`
      display: block;
    `}
`;
const InputElement = styled_components.input`
  ${(props)=>props.theme.typography.uiElement};
  width: 100%;
  border: none;
  outline: none;
  padding: 0;
  color: ${(props)=>props.theme.color.textDark};

  &::placeholder {
    color: ${(props)=>props.theme.color.textPlaceholder};
  }
`;
const ListSearchInput = /*#__PURE__*/ react.forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { onChangeValue, value, className: _ } = _ref1, restTextInputAttributes = _object_without_properties(_ref1, [
        "onChangeValue",
        "value",
        "className"
    ]), [forwardedRef] = _rest;
    const inputRefInternal = useRef(null);
    const inputRef = useMergeRefs(inputRefInternal, forwardedRef);
    const handleContainerClick = ()=>{
        if (inputRefInternal.current) inputRefInternal.current.focus();
    };
    const handleChange = (e)=>{
        null == onChangeValue || onChangeValue(e.target.value);
    };
    return /*#__PURE__*/ react.createElement(ListItemStyles.Container, {
        onClick: handleContainerClick
    }, /*#__PURE__*/ react.createElement(ListItemStyles.LeftIconContainer, {
        "aria-hidden": true
    }, /*#__PURE__*/ react.createElement(Search, null)), /*#__PURE__*/ react.createElement(ListItemStyles.TextContainer, null, /*#__PURE__*/ react.createElement(InputElement, _object_spread_props(_object_spread({}, restTextInputAttributes), {
        onChange: handleChange,
        ref: inputRef,
        value: value
    }))), /*#__PURE__*/ react.createElement(CrossIcon, {
        "aria-hidden": true,
        $isVisible: !!value,
        onClick: ()=>null == onChangeValue ? void 0 : onChangeValue('')
    }));
});
export { ListSearchInput };
