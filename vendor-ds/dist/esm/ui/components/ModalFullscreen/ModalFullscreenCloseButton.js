import react from "react";
import styled_components from "styled-components";
import Cross_16 from "../../atoms/icons/Cross-16.js";
import { STATIC_CLASS_NAME } from "../../constants.js";
import { mergeClassNames } from "../../utils/mergeClassNames.js";
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
const CloseIcon = styled_components(Cross_16)`
  display: block;
  margin: auto;
  path {
    fill: ${(props)=>props.theme.color.iconDefaultInverse};
  }
`;
const CloseButton = styled_components.button`
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 1;
  top: ${(props)=>props.top};
  right: ${(props)=>props.right};
  display: flex;
  background-color: ${(props)=>props.theme.color.backgroundGrayDefault};
  border-radius: 50%;
  border-color: transparent;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  outline: 0;
  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.color.borderFocus};
    outline-offset: 2px;
  }

  &:hover {
    background-color: ${(props)=>props.theme.color.backgroundGrayBold};
  }
`;
const ModalFullscreenCloseButton = (_0)=>{
    let { tabIndex = 0, top = '24px', right = '24px', className } = _0, rest = _object_without_properties(_0, [
        "tabIndex",
        "top",
        "right",
        "className"
    ]);
    return /*#__PURE__*/ react.createElement(CloseButton, _object_spread({
        tabIndex: tabIndex,
        top: top,
        right: right,
        className: mergeClassNames(STATIC_CLASS_NAME.modalClose, className)
    }, rest), /*#__PURE__*/ react.createElement(CloseIcon, null));
};
export { ModalFullscreenCloseButton };
