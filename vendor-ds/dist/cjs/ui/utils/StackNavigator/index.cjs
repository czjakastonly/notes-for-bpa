"use strict";
var __webpack_modules__ = {
    "./StackNavigationScreen" (module) {
        module.exports = require("./StackNavigationScreen.cjs");
    },
    "./StackNavigator" (module) {
        module.exports = require("./StackNavigator.cjs");
    },
    "./StackNavigator.types" (module) {
        module.exports = require("./StackNavigator.types.cjs");
    },
    "./StackNavigatorContext" (module) {
        module.exports = require("./StackNavigatorContext.cjs");
    },
    "./useStackNavigationState" (module) {
        module.exports = require("./useStackNavigationState.cjs");
    }
};
var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (void 0 !== cachedModule) return cachedModule.exports;
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
}
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
(()=>{
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, {
        StackNavigationScreen: ()=>_StackNavigationScreen__rspack_import_4.StackNavigationScreen,
        StackNavigator: ()=>_StackNavigator__rspack_import_1.StackNavigator,
        useStackNavigationState: ()=>_useStackNavigationState__rspack_import_2.useStackNavigationState,
        useStackNavigatorContext: ()=>_StackNavigatorContext__rspack_import_3.useStackNavigatorContext
    });
    var _StackNavigator_types__rspack_import_0 = __webpack_require__("./StackNavigator.types");
    var __rspack_reexport = {};
    for(const __rspack_import_key in _StackNavigator_types__rspack_import_0)if ([
        "StackNavigationScreen",
        "useStackNavigationState",
        "StackNavigator",
        "default",
        "useStackNavigatorContext"
    ].indexOf(__rspack_import_key) < 0) __rspack_reexport[__rspack_import_key] = ()=>_StackNavigator_types__rspack_import_0[__rspack_import_key];
    __webpack_require__.d(__webpack_exports__, __rspack_reexport);
    var _StackNavigator__rspack_import_1 = __webpack_require__("./StackNavigator");
    var _useStackNavigationState__rspack_import_2 = __webpack_require__("./useStackNavigationState");
    var _StackNavigatorContext__rspack_import_3 = __webpack_require__("./StackNavigatorContext");
    var _StackNavigationScreen__rspack_import_4 = __webpack_require__("./StackNavigationScreen");
})();
exports.StackNavigationScreen = __webpack_exports__.StackNavigationScreen;
exports.StackNavigator = __webpack_exports__.StackNavigator;
exports.useStackNavigationState = __webpack_exports__.useStackNavigationState;
exports.useStackNavigatorContext = __webpack_exports__.useStackNavigatorContext;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "StackNavigationScreen",
    "StackNavigator",
    "useStackNavigationState",
    "useStackNavigatorContext"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
