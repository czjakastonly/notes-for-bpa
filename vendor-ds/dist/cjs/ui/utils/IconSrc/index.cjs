"use strict";
var __webpack_modules__ = {
    "./IconSrc" (module) {
        module.exports = require("./IconSrc.cjs");
    },
    "./IconSrc.types" (module) {
        module.exports = require("./IconSrc.types.cjs");
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
        IconSrc: ()=>_IconSrc__rspack_import_0.IconSrc
    });
    var _IconSrc__rspack_import_0 = __webpack_require__("./IconSrc");
    var _IconSrc_types__rspack_import_1 = __webpack_require__("./IconSrc.types");
    var __rspack_reexport = {};
    for(const __rspack_import_key in _IconSrc_types__rspack_import_1)if ([
        "IconSrc",
        "default"
    ].indexOf(__rspack_import_key) < 0) __rspack_reexport[__rspack_import_key] = ()=>_IconSrc_types__rspack_import_1[__rspack_import_key];
    __webpack_require__.d(__webpack_exports__, __rspack_reexport);
})();
exports.IconSrc = __webpack_exports__.IconSrc;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "IconSrc"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
