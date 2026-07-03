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
    useIsOverflowing: ()=>useIsOverflowing
});
const external_react_namespaceObject = require("react");
function useIsOverflowing() {
    const ref = (0, external_react_namespaceObject.useRef)(null);
    const [isOverflowing, setIsOverflowing] = (0, external_react_namespaceObject.useState)(false);
    const checkOverflow = (0, external_react_namespaceObject.useCallback)(()=>{
        if (ref.current) setIsOverflowing(ref.current.scrollWidth > ref.current.offsetWidth);
    }, []);
    (0, external_react_namespaceObject.useEffect)(()=>{
        checkOverflow();
        const el = ref.current;
        if (!el) return;
        const observer = new ResizeObserver(checkOverflow);
        observer.observe(el);
        return ()=>observer.disconnect();
    }, [
        checkOverflow
    ]);
    return {
        ref,
        isOverflowing
    };
}
exports.useIsOverflowing = __webpack_exports__.useIsOverflowing;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "useIsOverflowing"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
