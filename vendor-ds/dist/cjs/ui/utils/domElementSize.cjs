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
    useDomElementSize: ()=>useDomElementSize
});
const external_react_namespaceObject = require("react");
const useDomElementSize = (ref)=>{
    const [refWidth, setRefWidth] = (0, external_react_namespaceObject.useState)();
    const calcRefWidth = (0, external_react_namespaceObject.useCallback)(()=>{
        if (ref && ref.current) setRefWidth(ref.current.clientWidth);
    }, [
        ref
    ]);
    (0, external_react_namespaceObject.useEffect)(()=>{
        calcRefWidth();
        if (ref && ref.current) window.addEventListener('resize', calcRefWidth);
        return ()=>{
            window.removeEventListener('resize', calcRefWidth);
        };
    }, [
        ref,
        calcRefWidth
    ]);
    return {
        width: refWidth
    };
};
exports.useDomElementSize = __webpack_exports__.useDomElementSize;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "useDomElementSize"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
