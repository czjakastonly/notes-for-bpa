import { useContext, useMemo } from "react";
import { InteractionHighlightItemContext } from "./InteractionHighlightProvider.js";
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
const useInteractionHighlightItem = ({ uuid, disabled, prioritized })=>{
    const contextValue = useContext(InteractionHighlightItemContext);
    if (!contextValue) throw new Error('STON.ERROR.MissingContext.InteractionHighlightItemContext');
    const { highlightedUuid, ITEM_PRIORITIZED_ATTR, ITEM_DISABLED_ATTR, ITEM_UUID_ATTR } = contextValue;
    const isHighlighted = !!uuid && uuid === highlightedUuid;
    return useMemo(()=>({
            isHighlighted,
            uuid,
            itemDomProps: _object_spread({
                [ITEM_UUID_ATTR]: uuid
            }, disabled && {
                [ITEM_DISABLED_ATTR]: true
            }, prioritized && {
                [ITEM_PRIORITIZED_ATTR]: true
            })
        }), [
        uuid,
        isHighlighted,
        prioritized,
        disabled,
        ITEM_PRIORITIZED_ATTR,
        ITEM_DISABLED_ATTR,
        ITEM_UUID_ATTR
    ]);
};
export { useInteractionHighlightItem };
