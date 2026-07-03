"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.n = (module)=>{
        var getter = module && module.__esModule ? ()=>module['default'] : ()=>module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
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
    StackNavigator: ()=>StackNavigator
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_useStackNavigationState_cjs_namespaceObject = require("./useStackNavigationState.cjs");
const external_StackNavigatorContext_cjs_namespaceObject = require("./StackNavigatorContext.cjs");
const StackNavigator = ({ children, navigator: xorNavigator, slug: xorInitialSlug })=>{
    const slug = xorNavigator && xorNavigator.rootSlug || xorInitialSlug;
    const selfNavigator = xorNavigator || (0, external_useStackNavigationState_cjs_namespaceObject.useStackNavigationState)(slug);
    if (!selfNavigator.isActive) return null;
    return /*#__PURE__*/ external_react_default().createElement(external_StackNavigatorContext_cjs_namespaceObject.StackNavigatorContext.Provider, {
        value: selfNavigator
    }, children);
};
exports.StackNavigator = __webpack_exports__.StackNavigator;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "StackNavigator"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
