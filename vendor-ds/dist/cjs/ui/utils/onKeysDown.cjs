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
    useOnKeysDown: ()=>useOnKeysDown
});
const external_react_namespaceObject = require("react");
const useOnKeysDown = ({ eventKeyList, callback, condition = true })=>{
    const cachedCallback = (0, external_react_namespaceObject.useRef)(callback);
    const eventKeyToken = eventKeyList.join('');
    (0, external_react_namespaceObject.useEffect)(()=>{
        cachedCallback.current = callback;
    }, [
        callback
    ]);
    (0, external_react_namespaceObject.useEffect)(()=>{
        if (condition) {
            const eventHandler = (event)=>{
                if (event.defaultPrevented) return;
                if (eventKeyList.includes(event.key)) cachedCallback.current(event);
            };
            window.addEventListener('keydown', eventHandler, true);
            return ()=>{
                window.removeEventListener('keydown', eventHandler, true);
            };
        }
    }, [
        callback,
        condition,
        eventKeyToken
    ]);
};
exports.useOnKeysDown = __webpack_exports__.useOnKeysDown;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "useOnKeysDown"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
