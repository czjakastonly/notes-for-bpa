import react, { forwardRef } from "react";
import styled_components from "styled-components";
import { ListItemStyles } from "./_shared/styles.js";
import { ButtonMinimal } from "../buttons/ButtonMinimal/index.js";
import { ButtonStyles } from "../buttons/_shared/styles.js";
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
const Container = styled_components.div`
  display: flex;
  padding: 4px 0px 4px 12px;
  align-items: center;
  gap: 8px;
  ${ButtonStyles.MinimalButtonElement} {
    margin-left: -6px;
  }
`;
const ListHeaderTitle = /*#__PURE__*/ forwardRef((_0, _1)=>{
    let _ref = [
        _0,
        _1
    ], [_ref1, ..._rest] = _ref, { children, onBackClick } = _ref1, rest = _object_without_properties(_ref1, [
        "children",
        "onBackClick"
    ]), [forwardedRef] = _rest;
    return /*#__PURE__*/ react.createElement(Container, _object_spread({
        ref: forwardedRef
    }, rest), onBackClick && /*#__PURE__*/ react.createElement(ButtonMinimal, {
        iconOnly: /*#__PURE__*/ react.createElement(ListItemStyles.ChevronLeftIcon, null),
        onClick: onBackClick,
        "aria-label": "back",
        size: "small"
    }), /*#__PURE__*/ react.createElement(ListItemStyles.HeaderTitle, null, children));
});
export { ListHeaderTitle };
