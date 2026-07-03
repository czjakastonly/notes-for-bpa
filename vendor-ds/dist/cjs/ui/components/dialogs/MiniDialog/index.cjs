"use strict";
var __webpack_modules__ = {
    "./MiniDialog" (module) {
        module.exports = require("./MiniDialog.cjs");
    },
    "./MiniDialog.types" (module) {
        module.exports = require("./MiniDialog.types.cjs");
    },
    "./components/DialogHeader" (module) {
        module.exports = require("./components/DialogHeader.cjs");
    },
    "./components/DialogSectionHeading" (module) {
        module.exports = require("./components/DialogSectionHeading.cjs");
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
        DialogHeader: ()=>_components_DialogHeader__rspack_import_2.DialogHeader,
        DialogSectionHeading: ()=>_components_DialogSectionHeading__rspack_import_3.DialogSectionHeading,
        MiniDialog: ()=>_MiniDialog__rspack_import_1.MiniDialog
    });
    var _MiniDialog_types__rspack_import_0 = __webpack_require__("./MiniDialog.types");
    var __rspack_reexport = {};
    for(const __rspack_import_key in _MiniDialog_types__rspack_import_0)if ([
        "DialogHeader",
        "DialogSectionHeading",
        "MiniDialog",
        "default"
    ].indexOf(__rspack_import_key) < 0) __rspack_reexport[__rspack_import_key] = ()=>_MiniDialog_types__rspack_import_0[__rspack_import_key];
    __webpack_require__.d(__webpack_exports__, __rspack_reexport);
    var _MiniDialog__rspack_import_1 = __webpack_require__("./MiniDialog");
    var _components_DialogHeader__rspack_import_2 = __webpack_require__("./components/DialogHeader");
    var _components_DialogSectionHeading__rspack_import_3 = __webpack_require__("./components/DialogSectionHeading");
})();
exports.DialogHeader = __webpack_exports__.DialogHeader;
exports.DialogSectionHeading = __webpack_exports__.DialogSectionHeading;
exports.MiniDialog = __webpack_exports__.MiniDialog;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "DialogHeader",
    "DialogSectionHeading",
    "MiniDialog"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
