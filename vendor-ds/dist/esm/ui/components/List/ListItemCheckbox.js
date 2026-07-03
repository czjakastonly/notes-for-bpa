import react from "react";
import styled_components, { css } from "styled-components";
import Tick_12 from "../../atoms/icons/Tick-12.js";
import { ListItemStyles } from "./_shared/styles.js";
import { RowFlex } from "../Flex/index.js";
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
function ListItemCheckbox_ownKeys(object, enumerableOnly) {
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
    else ListItemCheckbox_ownKeys(Object(source)).forEach(function(key) {
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
const IconTick = styled_components(Tick_12)`
  & path {
    fill: ${({ theme })=>theme.color.iconDefaultInverse};
  }
`;
const Rect = styled_components.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px;
  transition: border-color 0.2s, background-color 0.2s;

  border-color: ${({ theme })=>theme.color.borderDefault};
  background-color: ${({ theme })=>theme.color.backgroundDefault};

  ${({ $checked })=>$checked && css`
      border-color: ${({ theme })=>theme.color.backgroundPrimary};
      background-color: ${({ theme })=>theme.color.backgroundPrimary};
    `}

  ${IconTick} {
    visibility: ${({ $checked })=>$checked ? 'visible' : 'hidden'};
  }
`;
const ListItemCheckbox = /*#__PURE__*/ react.forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { disabled, isHighlighted, isSelected, label, isNavigationItem } = _ref1, restDivAttributes = _object_without_properties(_ref1, [
        "disabled",
        "isHighlighted",
        "isSelected",
        "label",
        "isNavigationItem"
    ]), [forwardedRef] = _rest;
    return /*#__PURE__*/ react.createElement(ListItemStyles.ContainerSelectable, _object_spread_props(_object_spread({}, restDivAttributes), {
        isDisabled: disabled,
        isHighlighted: isHighlighted,
        isSelected: isSelected,
        ref: forwardedRef
    }), /*#__PURE__*/ react.createElement(ListItemStyles.TextContainer, null, /*#__PURE__*/ react.createElement(RowFlex, {
        alignItems: "center",
        gap: 1
    }, /*#__PURE__*/ react.createElement(Rect, {
        $checked: isSelected,
        "aria-hidden": true
    }, /*#__PURE__*/ react.createElement(IconTick, null)), /*#__PURE__*/ react.createElement(ListItemStyles.Title, null, label))), isNavigationItem && /*#__PURE__*/ react.createElement(ListItemStyles.ChevronRightIcon, {
        "aria-hidden": true
    }));
});
export { ListItemCheckbox };
