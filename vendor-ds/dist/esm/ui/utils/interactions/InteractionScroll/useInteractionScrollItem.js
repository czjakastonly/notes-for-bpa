import { useContext, useEffect, useMemo } from "react";
import { InteractionScrollContext } from "./InteractionScrollProvider.js";
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
const useInteractionScrollItem = ({ uuid, keepIntoView, prioritized })=>{
    const contextValue = useContext(InteractionScrollContext);
    if (!contextValue) throw new Error('STON.ERROR.MissingContext.InteractionScrollContext');
    const { setUuidToKeepIntoView, ITEM_UUID_ATTR, ITEM_PRIORITIZED_ATTR } = contextValue;
    useEffect(()=>{
        if (keepIntoView) setUuidToKeepIntoView(uuid);
    }, [
        keepIntoView,
        uuid,
        setUuidToKeepIntoView
    ]);
    return useMemo(()=>({
            uuid,
            itemDomProps: _object_spread({
                [ITEM_UUID_ATTR]: uuid
            }, prioritized && {
                [ITEM_PRIORITIZED_ATTR]: true
            })
        }), [
        uuid,
        prioritized,
        ITEM_PRIORITIZED_ATTR,
        ITEM_UUID_ATTR
    ]);
};
export { useInteractionScrollItem };
