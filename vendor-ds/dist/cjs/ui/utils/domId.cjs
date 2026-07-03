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
    useDomId: ()=>useDomId,
    generateLabelDomId: ()=>generateLabelDomId,
    generateErrorMessageDomId: ()=>generateErrorMessageDomId,
    generateDialogDomId: ()=>generateDialogDomId,
    generateListboxDomId: ()=>generateListboxDomId,
    generateDescribeDomId: ()=>generateDescribeDomId
});
const external_react_namespaceObject = require("react");
const useDomId = (id)=>(0, external_react_namespaceObject.useMemo)(()=>id || `x${Math.random().toString(36).slice(2)}`, [
        id
    ]);
const generateErrorMessageDomId = (id, condition = true)=>condition && id ? `errormessage-for-${id}` : void 0;
const generateLabelDomId = (id, condition = true)=>id && condition ? `label-for-${id}` : void 0;
const generateDescribeDomId = (id, condition = true)=>id && condition ? `describe-for-${id}` : void 0;
const generateListboxDomId = (id, condition = true)=>id && condition ? `listbox-for-${id}` : void 0;
const generateDialogDomId = (id, condition = true)=>id && condition ? `dialog-for-${id}` : void 0;
exports.generateDescribeDomId = __webpack_exports__.generateDescribeDomId;
exports.generateDialogDomId = __webpack_exports__.generateDialogDomId;
exports.generateErrorMessageDomId = __webpack_exports__.generateErrorMessageDomId;
exports.generateLabelDomId = __webpack_exports__.generateLabelDomId;
exports.generateListboxDomId = __webpack_exports__.generateListboxDomId;
exports.useDomId = __webpack_exports__.useDomId;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "generateDescribeDomId",
    "generateDialogDomId",
    "generateErrorMessageDomId",
    "generateLabelDomId",
    "generateListboxDomId",
    "useDomId"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
