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
    LastEventProvider: ()=>LastEventProvider,
    LastEventContext: ()=>LastEventContext
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const LastEventContext = /*#__PURE__*/ (0, external_react_namespaceObject.createContext)(void 0);
function LastEventProvider({ children }) {
    const wasLastEventTypeKeyboard = (0, external_react_namespaceObject.useRef)(false);
    (0, external_react_namespaceObject.useEffect)(()=>{
        const setWasLastEventKeyboard = ()=>{
            wasLastEventTypeKeyboard.current = true;
        };
        const setWasLastEventTypeNotKeyboard = ()=>{
            wasLastEventTypeKeyboard.current = false;
        };
        window.addEventListener('keydown', setWasLastEventKeyboard);
        window.addEventListener('mousedown', setWasLastEventTypeNotKeyboard);
        return ()=>{
            window.removeEventListener('keydown', setWasLastEventKeyboard);
            window.removeEventListener('mousedown', setWasLastEventTypeNotKeyboard);
        };
    }, []);
    const getWasLastEventTypeKeyboard = (0, external_react_namespaceObject.useCallback)(()=>!!wasLastEventTypeKeyboard.current, []);
    return /*#__PURE__*/ external_react_default().createElement(LastEventContext.Provider, {
        value: (0, external_react_namespaceObject.useMemo)(()=>({
                getWasLastEventTypeKeyboard
            }), [
            getWasLastEventTypeKeyboard
        ])
    }, children);
}
exports.LastEventContext = __webpack_exports__.LastEventContext;
exports.LastEventProvider = __webpack_exports__.LastEventProvider;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "LastEventContext",
    "LastEventProvider"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
