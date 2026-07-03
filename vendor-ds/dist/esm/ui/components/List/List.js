import react, { useContext, useRef } from "react";
import styled_components from "styled-components";
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
function List_ownKeys(object, enumerableOnly) {
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
    else List_ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}
const ListComponent = styled_components.div`
  position: relative;
  outline: none;
`;
const BodyRefContext = /*#__PURE__*/ react.createContext(null);
const List = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const bodyRef = useRef(null);
    return /*#__PURE__*/ react.createElement(BodyRefContext.Provider, {
        value: bodyRef
    }, /*#__PURE__*/ react.createElement(ListComponent, _object_spread_props(_object_spread({}, props), {
        ref: forwardedRef
    })));
});
const useListBodyRef = ()=>{
    const bodyRefContextValue = useContext(BodyRefContext);
    if (!bodyRefContextValue) console.log('STON.WARNING - ListHeader or ListBody outside List');
    return bodyRefContextValue;
};
export { List, ListComponent, useListBodyRef };
