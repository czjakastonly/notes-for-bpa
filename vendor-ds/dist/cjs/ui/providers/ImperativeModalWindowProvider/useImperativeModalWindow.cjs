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
    useImperativeModalWindow: ()=>useImperativeModalWindow
});
const external_react_namespaceObject = require("react");
const external_ImperativeModalWindowProvider_cjs_namespaceObject = require("./ImperativeModalWindowProvider.cjs");
function useImperativeModalWindow() {
    const modalControls = (0, external_react_namespaceObject.useContext)(external_ImperativeModalWindowProvider_cjs_namespaceObject.ImperativeModalWindowContext);
    if (!modalControls) throw new Error('useImperativeModalWindow requires <ImperativeModalWindowProvider>');
    const { open, close, openComponent } = modalControls;
    return (0, external_react_namespaceObject.useMemo)(()=>({
            open,
            openComponent,
            close
        }), [
        open,
        close,
        openComponent
    ]);
}
exports.useImperativeModalWindow = __webpack_exports__.useImperativeModalWindow;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "useImperativeModalWindow"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
