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
    useDomElementResizeEvents: ()=>useDomElementResizeEvents
});
const external_react_namespaceObject = require("react");
const external_lodash_namespaceObject = require("lodash");
function useDomElementResizeEvents({ delay: debounceMs = 200, targetRef, onResizeStart, onResizeEnd }) {
    const isResizingRef = (0, external_react_namespaceObject.useRef)(false);
    const startRef = (0, external_react_namespaceObject.useRef)(onResizeStart);
    const endRef = (0, external_react_namespaceObject.useRef)(onResizeEnd);
    (0, external_react_namespaceObject.useEffect)(()=>{
        startRef.current = onResizeStart;
        endRef.current = onResizeEnd;
    }, [
        onResizeStart,
        onResizeEnd
    ]);
    (0, external_react_namespaceObject.useEffect)(()=>{
        if (!(null == targetRef ? void 0 : targetRef.current)) return;
        const handleResizeEnd = (0, external_lodash_namespaceObject.debounce)(()=>{
            if (isResizingRef.current) {
                var _endRef_current;
                isResizingRef.current = false;
                null == (_endRef_current = endRef.current) || _endRef_current.call(endRef, targetRef.current);
            }
        }, debounceMs);
        const onResize = ()=>{
            if (!isResizingRef.current) {
                var _startRef_current;
                isResizingRef.current = true;
                null == (_startRef_current = startRef.current) || _startRef_current.call(startRef, targetRef.current);
            }
            handleResizeEnd();
        };
        const observer = new ResizeObserver(onResize);
        observer.observe(targetRef.current);
        return ()=>{
            observer.disconnect();
            handleResizeEnd.cancel();
        };
    }, [
        targetRef,
        debounceMs
    ]);
}
exports.useDomElementResizeEvents = __webpack_exports__.useDomElementResizeEvents;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "useDomElementResizeEvents"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
