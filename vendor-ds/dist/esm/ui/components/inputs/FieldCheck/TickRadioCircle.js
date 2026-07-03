import react from "react";
import styled_components, { useTheme } from "styled-components";
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
function TickRadioCircle_ownKeys(object, enumerableOnly) {
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
    else TickRadioCircle_ownKeys(Object(source)).forEach(function(key) {
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
const IconTick = styled_components.span`
  content: '';
  height: 6px;
  width: 6px;
  background-color: ${({ $color })=>$color};
  border-radius: 50%;
  display: block;
`;
const Circle = styled_components.div`
  box-sizing: content-box;
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0;
  padding: 3px;
  margin: 3px 2px 3px 2px;
  border: 1.5px solid ${({ $borderColor })=>$borderColor};
  border-radius: 50%;
  background-color: ${(props)=>props.theme.color.backgroundDefault};
  transition: border 0.2s, background-color 0.2s;

  ${IconTick} {
    visibility: ${({ $checked })=>$checked ? 'visible' : 'hidden'};
  }
`;
const TickRadioCircle = (_0)=>{
    let { disabled, checked, statusBorderColor } = _0, restDivAttributes = _object_without_properties(_0, [
        "disabled",
        "checked",
        "statusBorderColor"
    ]);
    const theme = useTheme();
    let borderColor = '';
    borderColor = disabled ? theme.color.borderSubtle : checked ? theme.color.borderPrimary : statusBorderColor ? statusBorderColor : theme.color.borderDefault;
    const checkColor = disabled ? theme.color.backgroundDefaultPressed : theme.color.backgroundPrimary;
    return /*#__PURE__*/ react.createElement(Circle, _object_spread_props(_object_spread({}, restDivAttributes), {
        $borderColor: borderColor,
        $checked: !!checked
    }), /*#__PURE__*/ react.createElement(IconTick, {
        $color: checkColor
    }));
};
export { TickRadioCircle };
