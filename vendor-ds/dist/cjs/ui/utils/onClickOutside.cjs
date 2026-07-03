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
    useOnClickOutside: ()=>useOnClickOutside
});
const external_react_namespaceObject = require("react");
const hasRefElementEventTargetInside = (ref, event)=>{
    if (!ref) return false;
    if (!event) return false;
    const { current: element } = ref;
    const { target } = event;
    return !!element && !!target && element.contains(target);
};
const useOnClickOutside = ({ elementRef, callback, exceptionRef, condition = true })=>{
    const cachedCallback = (0, external_react_namespaceObject.useRef)(callback);
    (0, external_react_namespaceObject.useEffect)(()=>{
        cachedCallback.current = callback;
    }, [
        callback
    ]);
    (0, external_react_namespaceObject.useEffect)(()=>{
        if (condition) {
            const eventHandler = (event)=>{
                const clickedOnRef = hasRefElementEventTargetInside(elementRef, event);
                if (!clickedOnRef) {
                    const clickedOnException = hasRefElementEventTargetInside(exceptionRef, event);
                    if (!clickedOnException) cachedCallback.current(event);
                }
            };
            document.addEventListener('mousedown', eventHandler);
            document.addEventListener('touchstart', eventHandler);
            return ()=>{
                document.removeEventListener('mousedown', eventHandler);
                document.removeEventListener('touchstart', eventHandler);
            };
        }
    }, [
        elementRef,
        exceptionRef,
        condition
    ]);
};
exports.useOnClickOutside = __webpack_exports__.useOnClickOutside;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "useOnClickOutside"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
