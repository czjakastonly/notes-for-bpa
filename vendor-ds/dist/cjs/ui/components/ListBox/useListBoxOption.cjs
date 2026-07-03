"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ("u" > typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    useListBoxOption: ()=>useListBoxOption
});
const index_cjs_namespaceObject = require("../../utils/interactions/InteractionHighlight/index.cjs");
const InteractionAction_index_cjs_namespaceObject = require("../../utils/interactions/InteractionAction/index.cjs");
const InteractionSelect_index_cjs_namespaceObject = require("../../utils/interactions/InteractionSelect/index.cjs");
const InteractionScroll_index_cjs_namespaceObject = require("../../utils/interactions/InteractionScroll/index.cjs");
const domId_cjs_namespaceObject = require("../../utils/domId.cjs");
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
function useListBoxOption_ownKeys(object, enumerableOnly) {
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
    else useListBoxOption_ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}
const useListBoxOption = ({ uuid: optionalUuid, action, disabled, payload, value })=>{
    const domId = (0, domId_cjs_namespaceObject.useDomId)(optionalUuid);
    const { isSelected } = (0, InteractionSelect_index_cjs_namespaceObject.useInteractionSelectItem)({
        uuid: domId,
        value
    });
    const { isHighlighted, itemDomProps: highlightDomProps } = (0, index_cjs_namespaceObject.useInteractionHighlightItem)({
        uuid: domId,
        disabled,
        prioritized: isSelected
    });
    const { itemDomProps: scrollDomProps } = (0, InteractionScroll_index_cjs_namespaceObject.useInteractionScrollItem)({
        uuid: domId,
        keepIntoView: isHighlighted,
        prioritized: isSelected
    });
    const { onClick } = (0, InteractionAction_index_cjs_namespaceObject.useInteractionActionItem)({
        uuid: domId,
        action,
        payload,
        disabled,
        isCurrent: isHighlighted
    });
    return {
        isHighlighted,
        isSelected,
        onClick,
        itemDomProps: _object_spread_props(_object_spread({}, highlightDomProps, scrollDomProps), {
            'aria-selected': isSelected,
            'aria-disabled': disabled,
            role: 'option',
            id: domId
        })
    };
};
exports.useListBoxOption = __webpack_exports__.useListBoxOption;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "useListBoxOption"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
