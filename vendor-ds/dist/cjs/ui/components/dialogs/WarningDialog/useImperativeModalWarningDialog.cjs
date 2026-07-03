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
    useImperativeModalWarningDialog: ()=>useImperativeModalWarningDialog
});
const external_react_namespaceObject = require("react");
const index_cjs_namespaceObject = require("../../../providers/ImperativeModalWindowProvider/index.cjs");
const external_WarningDialog_cjs_namespaceObject = require("./WarningDialog.cjs");
const useImperativeModalWarningDialog = ()=>{
    const { openComponent: openModalWindow, close } = (0, index_cjs_namespaceObject.useImperativeModalWindow)();
    return (0, external_react_namespaceObject.useMemo)(()=>({
            open: (dialogProps, modalOptions)=>{
                openModalWindow({
                    component: external_WarningDialog_cjs_namespaceObject.WarningDialog,
                    componentProps: dialogProps,
                    modalWindowOptions: modalOptions
                });
            },
            close
        }), [
        openModalWindow,
        close
    ]);
};
exports.useImperativeModalWarningDialog = __webpack_exports__.useImperativeModalWarningDialog;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "useImperativeModalWarningDialog"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
