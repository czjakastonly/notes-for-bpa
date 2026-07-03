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
    useInteractionScrollItem: ()=>external_useInteractionScrollItem_cjs_namespaceObject.useInteractionScrollItem,
    InteractionScrollProvider: ()=>external_InteractionScrollProvider_cjs_namespaceObject.InteractionScrollProvider,
    useInteractionScrollContainer: ()=>external_useInteractionScrollContainer_cjs_namespaceObject.useInteractionScrollContainer
});
const external_InteractionScrollProvider_cjs_namespaceObject = require("./InteractionScrollProvider.cjs");
const external_useInteractionScrollContainer_cjs_namespaceObject = require("./useInteractionScrollContainer.cjs");
const external_useInteractionScrollItem_cjs_namespaceObject = require("./useInteractionScrollItem.cjs");
exports.InteractionScrollProvider = __webpack_exports__.InteractionScrollProvider;
exports.useInteractionScrollContainer = __webpack_exports__.useInteractionScrollContainer;
exports.useInteractionScrollItem = __webpack_exports__.useInteractionScrollItem;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "InteractionScrollProvider",
    "useInteractionScrollContainer",
    "useInteractionScrollItem"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
