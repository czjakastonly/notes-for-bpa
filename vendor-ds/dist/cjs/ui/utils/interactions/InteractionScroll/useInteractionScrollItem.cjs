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
    useInteractionScrollItem: ()=>useInteractionScrollItem
});
const external_react_namespaceObject = require("react");
const external_InteractionScrollProvider_cjs_namespaceObject = require("./InteractionScrollProvider.cjs");
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
    const contextValue = (0, external_react_namespaceObject.useContext)(external_InteractionScrollProvider_cjs_namespaceObject.InteractionScrollContext);
    if (!contextValue) throw new Error('STON.ERROR.MissingContext.InteractionScrollContext');
    const { setUuidToKeepIntoView, ITEM_UUID_ATTR, ITEM_PRIORITIZED_ATTR } = contextValue;
    (0, external_react_namespaceObject.useEffect)(()=>{
        if (keepIntoView) setUuidToKeepIntoView(uuid);
    }, [
        keepIntoView,
        uuid,
        setUuidToKeepIntoView
    ]);
    return (0, external_react_namespaceObject.useMemo)(()=>({
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
exports.useInteractionScrollItem = __webpack_exports__.useInteractionScrollItem;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "useInteractionScrollItem"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
