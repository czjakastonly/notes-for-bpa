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
    useInteractionActionContainer: ()=>useInteractionActionContainer
});
const external_react_namespaceObject = require("react");
const external_InteractionActionProvider_cjs_namespaceObject = require("./InteractionActionProvider.cjs");
const useInteractionActionContainer = ()=>{
    const contextValue = (0, external_react_namespaceObject.useContext)(external_InteractionActionProvider_cjs_namespaceObject.InteractionActionContainerContext);
    if (!contextValue) throw new Error('STON.ERROR.DEV - InteractionActionContainerContext accessed without provider');
    return contextValue;
};
exports.useInteractionActionContainer = __webpack_exports__.useInteractionActionContainer;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "useInteractionActionContainer"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
