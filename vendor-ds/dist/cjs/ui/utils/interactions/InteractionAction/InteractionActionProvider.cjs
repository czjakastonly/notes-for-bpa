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
    InteractionActionItemContext: ()=>InteractionActionItemContext,
    InteractionActionProvider: ()=>InteractionActionProvider,
    InteractionActionContainerContext: ()=>InteractionActionContainerContext
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_domEvent_helpers_cjs_namespaceObject = require("../../domEvent.helpers.cjs");
const InteractionActionItemContext = /*#__PURE__*/ external_react_default().createContext(null);
const InteractionActionContainerContext = /*#__PURE__*/ external_react_default().createContext(null);
const InteractionActionProvider = ({ children, defaultAction, onPostAction })=>{
    const currentActionRef = (0, external_react_namespaceObject.useRef)();
    const setCurrentAction = (0, external_react_namespaceObject.useCallback)((action)=>{
        currentActionRef.current = action;
    }, []);
    const cleanupCurrentAction = (0, external_react_namespaceObject.useCallback)((callback)=>{
        if (currentActionRef.current === callback) currentActionRef.current = void 0;
    }, []);
    const runCurrentAction = (0, external_react_namespaceObject.useCallback)(()=>{
        var _currentActionRef_current;
        const actionResult = null == (_currentActionRef_current = currentActionRef.current) ? void 0 : _currentActionRef_current.call(currentActionRef);
        if (!(null == actionResult ? void 0 : actionResult.preventPostAction)) null == onPostAction || onPostAction();
    }, [
        onPostAction
    ]);
    const handleEnterPressed = (0, external_react_namespaceObject.useCallback)((e)=>{
        e.preventDefault();
        runCurrentAction();
    }, [
        runCurrentAction
    ]);
    const handleSpacePressed = (0, external_react_namespaceObject.useCallback)((e)=>{
        var _e_persist;
        null == (_e_persist = e.persist) || _e_persist.call(e);
        if (!(0, external_domEvent_helpers_cjs_namespaceObject.isSpaceHandledByTargetEvent)(e)) {
            e.preventDefault();
            runCurrentAction();
        }
    }, [
        runCurrentAction
    ]);
    return /*#__PURE__*/ external_react_default().createElement(InteractionActionContainerContext.Provider, {
        value: (0, external_react_namespaceObject.useMemo)(()=>({
                handleEnterPressed,
                handleSpacePressed
            }), [
            handleEnterPressed,
            handleSpacePressed
        ])
    }, /*#__PURE__*/ external_react_default().createElement(InteractionActionItemContext.Provider, {
        value: (0, external_react_namespaceObject.useMemo)(()=>({
                defaultAction,
                setCurrentAction,
                runCurrentAction,
                cleanupCurrentAction
            }), [
            defaultAction,
            setCurrentAction,
            runCurrentAction,
            cleanupCurrentAction
        ])
    }, children));
};
exports.InteractionActionContainerContext = __webpack_exports__.InteractionActionContainerContext;
exports.InteractionActionItemContext = __webpack_exports__.InteractionActionItemContext;
exports.InteractionActionProvider = __webpack_exports__.InteractionActionProvider;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "InteractionActionContainerContext",
    "InteractionActionItemContext",
    "InteractionActionProvider"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
