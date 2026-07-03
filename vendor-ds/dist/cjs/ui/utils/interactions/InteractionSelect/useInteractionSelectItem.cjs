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
    useInteractionSelectItem: ()=>useInteractionSelectItem
});
const external_react_namespaceObject = require("react");
const external_InteractionSelectProvider_cjs_namespaceObject = require("./InteractionSelectProvider.cjs");
const useInteractionSelectItem = ({ value, uuid })=>{
    const contextValue = (0, external_react_namespaceObject.useContext)(external_InteractionSelectProvider_cjs_namespaceObject.InteractionSelectContext);
    if (!contextValue) throw new Error('STON.ERROR.MissingContext.InteractionSelectContext');
    const { selectedValue } = contextValue;
    const isSelected = !!value && (Array.isArray(selectedValue) ? selectedValue.includes(value) : selectedValue === value);
    return (0, external_react_namespaceObject.useMemo)(()=>({
            isSelected,
            uuid
        }), [
        isSelected,
        uuid
    ]);
};
exports.useInteractionSelectItem = __webpack_exports__.useInteractionSelectItem;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "useInteractionSelectItem"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
