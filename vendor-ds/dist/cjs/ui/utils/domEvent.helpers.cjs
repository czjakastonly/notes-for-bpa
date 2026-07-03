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
    isSpaceHandledByTargetEvent: ()=>isSpaceHandledByTargetEvent
});
const isSpaceHandledByTargetEvent = (e)=>{
    var _target_tagName, _target_type, _target_tagName1;
    const target = e.target;
    return (null == target ? void 0 : null == (_target_tagName = target.tagName) ? void 0 : _target_tagName.toUpperCase()) === 'INPUT' && [
        'TEXT',
        'BUTTON'
    ].includes(null == target ? void 0 : null == (_target_type = target.type) ? void 0 : _target_type.toUpperCase()) || (null == target ? void 0 : null == (_target_tagName1 = target.tagName) ? void 0 : _target_tagName1.toUpperCase()) === 'TEXTAREA' || (null == target ? void 0 : target.getAttribute('contenteditable')) === 'true';
};
exports.isSpaceHandledByTargetEvent = __webpack_exports__.isSpaceHandledByTargetEvent;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "isSpaceHandledByTargetEvent"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
