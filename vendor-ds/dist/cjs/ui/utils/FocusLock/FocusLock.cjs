"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.n = (module)=>{
        var getter = module && module.__esModule ? ()=>module['default'] : ()=>module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
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
    FocusLock: ()=>FocusLock
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_constants_cjs_namespaceObject = require("../../constants.cjs");
const external_FocusLock_helpers_cjs_namespaceObject = require("./FocusLock.helpers.cjs");
const FocusLock = ({ children, isFocusLocked = true })=>{
    const lockContainerRef = (0, external_react_namespaceObject.useRef)(null);
    (0, external_react_namespaceObject.useEffect)(()=>{
        if (isFocusLocked) {
            const keyDownListener = (event)=>{
                if ('Tab' === event.key && lockContainerRef.current && (0, external_FocusLock_helpers_cjs_namespaceObject.getIsElementTopFocusLock)(null == lockContainerRef ? void 0 : lockContainerRef.current)) (0, external_FocusLock_helpers_cjs_namespaceObject.handleFocusLockTabPress)(lockContainerRef.current, event);
            };
            document.addEventListener('keydown', keyDownListener);
            return ()=>{
                document.removeEventListener('keydown', keyDownListener);
            };
        }
    }, [
        isFocusLocked
    ]);
    return /*#__PURE__*/ external_react_default().createElement("div", {
        className: isFocusLocked ? external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.focusLocked : void 0,
        ref: lockContainerRef
    }, children);
};
exports.FocusLock = __webpack_exports__.FocusLock;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "FocusLock"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
