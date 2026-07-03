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
    useInteractionActionItem: ()=>external_useInteractionActionItem_cjs_namespaceObject.useInteractionActionItem,
    useInteractionActionContainer: ()=>external_useInteractionActionContainer_cjs_namespaceObject.useInteractionActionContainer,
    InteractionActionProvider: ()=>external_InteractionActionProvider_cjs_namespaceObject.InteractionActionProvider
});
const external_InteractionActionProvider_cjs_namespaceObject = require("./InteractionActionProvider.cjs");
const external_useInteractionActionContainer_cjs_namespaceObject = require("./useInteractionActionContainer.cjs");
const external_useInteractionActionItem_cjs_namespaceObject = require("./useInteractionActionItem.cjs");
exports.InteractionActionProvider = __webpack_exports__.InteractionActionProvider;
exports.useInteractionActionContainer = __webpack_exports__.useInteractionActionContainer;
exports.useInteractionActionItem = __webpack_exports__.useInteractionActionItem;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "InteractionActionProvider",
    "useInteractionActionContainer",
    "useInteractionActionItem"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
