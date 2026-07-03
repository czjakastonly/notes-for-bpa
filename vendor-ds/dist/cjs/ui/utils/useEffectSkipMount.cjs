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
    useEffectSkipMount: ()=>useEffectSkipMount
});
const external_react_namespaceObject = require("react");
function useEffectSkipMount(effect, deps) {
    const isFirstRun = (0, external_react_namespaceObject.useRef)(true);
    (0, external_react_namespaceObject.useEffect)(()=>{
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        return effect();
    }, deps);
}
exports.useEffectSkipMount = __webpack_exports__.useEffectSkipMount;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "useEffectSkipMount"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
