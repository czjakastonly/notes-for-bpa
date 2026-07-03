import { useInteractionHighlightItem } from "../../../utils/interactions/InteractionHighlight/index.js";
import { useInteractionActionItem } from "../../../utils/interactions/InteractionAction/index.js";
import { useDomId } from "../../../utils/domId.js";
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
function useMenuAction_ownKeys(object, enumerableOnly) {
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
    else useMenuAction_ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}
const useMenuAction = ({ uuid: optionalUuid, disabled, payload, action })=>{
    const domId = useDomId(optionalUuid);
    const { isHighlighted, itemDomProps: highlightDomProps } = useInteractionHighlightItem({
        uuid: domId,
        disabled
    });
    const { onClick } = useInteractionActionItem({
        uuid: domId,
        payload,
        disabled,
        isCurrent: isHighlighted,
        action
    });
    return {
        isHighlighted,
        onClick,
        itemDomProps: _object_spread_props(_object_spread({}, highlightDomProps), {
            'aria-disabled': disabled,
            'data-activedescendant': isHighlighted,
            role: 'menuitem',
            id: domId
        })
    };
};
export { useMenuAction };
