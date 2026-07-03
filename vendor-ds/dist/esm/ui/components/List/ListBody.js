import react from "react";
import styled_components from "styled-components";
import { useMergeRefs } from "../../utils/mergeRefs.js";
import { useListBodyRef } from "./List.js";
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
const ListBodyComponent = styled_components.div`
  outline: none;
  padding: 8px;
  overflow: auto;
  scroll-padding: 48px 0 48px 0;
  ${({ theme })=>theme.scrollbars.basic};
`;
const ListBody = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const bodyRef = useListBodyRef();
    const mergedBodyRef = useMergeRefs(bodyRef, forwardedRef);
    return /*#__PURE__*/ react.createElement(ListBodyComponent, _object_spread({
        ref: mergedBodyRef
    }, props));
});
export { ListBody, ListBodyComponent };
