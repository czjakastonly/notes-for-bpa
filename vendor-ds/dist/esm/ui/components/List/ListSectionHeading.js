import react from "react";
import styled_components from "styled-components";
import { ListItemStyles } from "./_shared/styles.js";
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
const Text = styled_components.div`
  ${(props)=>props.theme.typography.uiElementLabel};
  color: ${(props)=>props.theme.color.textPlaceholder};
`;
const RightIconContainer = styled_components.div`
  margin-left: 6px;
`;
const ListSectionHeading = (_0)=>{
    let { iconRight, children } = _0, restDivAttributes = _object_without_properties(_0, [
        "iconRight",
        "children"
    ]);
    return /*#__PURE__*/ react.createElement(ListItemStyles.Container, restDivAttributes, /*#__PURE__*/ react.createElement(Text, null, children), iconRight && /*#__PURE__*/ react.createElement(RightIconContainer, null, iconRight));
};
export { ListSectionHeading };
