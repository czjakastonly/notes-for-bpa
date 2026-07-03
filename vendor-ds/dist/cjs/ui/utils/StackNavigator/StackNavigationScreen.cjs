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
    StackNavigationScreen: ()=>StackNavigationScreen
});
const external_StackNavigatorContext_cjs_namespaceObject = require("./StackNavigatorContext.cjs");
const StackNavigationScreen = ({ children, slug })=>{
    const navigator = (0, external_StackNavigatorContext_cjs_namespaceObject.useStackNavigatorContext)();
    if (navigator && navigator.checkIsCurrentSlug(slug)) {
        if ('function' == typeof children) return children({
            back: navigator.back
        });
        return children;
    }
    return null;
};
exports.StackNavigationScreen = __webpack_exports__.StackNavigationScreen;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "StackNavigationScreen"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
