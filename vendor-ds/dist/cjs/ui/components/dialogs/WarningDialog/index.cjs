"use strict";
var __webpack_modules__ = {
    "./WarningDialog" (module) {
        module.exports = require("./WarningDialog.cjs");
    },
    "./WarningDialog.types" (module) {
        module.exports = require("./WarningDialog.types.cjs");
    },
    "./components/DialogCloseButton" (module) {
        module.exports = require("./components/DialogCloseButton.cjs");
    },
    "./components/DialogContentWrap" (module) {
        module.exports = require("./components/DialogContentWrap.cjs");
    },
    "./components/DialogFooterWrap" (module) {
        module.exports = require("./components/DialogFooterWrap.cjs");
    },
    "./components/DialogHeader" (module) {
        module.exports = require("./components/DialogHeader.cjs");
    },
    "./useImperativeModalWarningDialog" (module) {
        module.exports = require("./useImperativeModalWarningDialog.cjs");
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
        DialogCloseButton: ()=>_components_DialogCloseButton__rspack_import_5.DialogCloseButton,
        DialogContentWrap: ()=>_components_DialogContentWrap__rspack_import_4.DialogContentWrap,
        DialogFooterWrap: ()=>_components_DialogFooterWrap__rspack_import_3.DialogFooterWrap,
        DialogHeader: ()=>_components_DialogHeader__rspack_import_2.DialogHeader,
        WarningDialog: ()=>_WarningDialog__rspack_import_0.WarningDialog,
        useImperativeModalWarningDialog: ()=>_useImperativeModalWarningDialog__rspack_import_6.useImperativeModalWarningDialog
    });
    var _WarningDialog__rspack_import_0 = __webpack_require__("./WarningDialog");
    var _WarningDialog_types__rspack_import_1 = __webpack_require__("./WarningDialog.types");
    var __rspack_reexport = {};
    for(const __rspack_import_key in _WarningDialog_types__rspack_import_1)if ([
        "default",
        "DialogHeader",
        "DialogContentWrap",
        "WarningDialog",
        "DialogFooterWrap",
        "DialogCloseButton",
        "useImperativeModalWarningDialog"
    ].indexOf(__rspack_import_key) < 0) __rspack_reexport[__rspack_import_key] = ()=>_WarningDialog_types__rspack_import_1[__rspack_import_key];
    __webpack_require__.d(__webpack_exports__, __rspack_reexport);
    var _components_DialogHeader__rspack_import_2 = __webpack_require__("./components/DialogHeader");
    var _components_DialogFooterWrap__rspack_import_3 = __webpack_require__("./components/DialogFooterWrap");
    var _components_DialogContentWrap__rspack_import_4 = __webpack_require__("./components/DialogContentWrap");
    var _components_DialogCloseButton__rspack_import_5 = __webpack_require__("./components/DialogCloseButton");
    var _useImperativeModalWarningDialog__rspack_import_6 = __webpack_require__("./useImperativeModalWarningDialog");
})();
exports.DialogCloseButton = __webpack_exports__.DialogCloseButton;
exports.DialogContentWrap = __webpack_exports__.DialogContentWrap;
exports.DialogFooterWrap = __webpack_exports__.DialogFooterWrap;
exports.DialogHeader = __webpack_exports__.DialogHeader;
exports.WarningDialog = __webpack_exports__.WarningDialog;
exports.useImperativeModalWarningDialog = __webpack_exports__.useImperativeModalWarningDialog;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "DialogCloseButton",
    "DialogContentWrap",
    "DialogFooterWrap",
    "DialogHeader",
    "WarningDialog",
    "useImperativeModalWarningDialog"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
