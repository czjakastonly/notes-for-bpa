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
    useInteractionActionItem: ()=>useInteractionActionItem
});
const external_react_namespaceObject = require("react");
const external_InteractionActionProvider_cjs_namespaceObject = require("./InteractionActionProvider.cjs");
const useInteractionActionItem = ({ uuid, action, payload, disabled, isCurrent })=>{
    const contextValue = (0, external_react_namespaceObject.useContext)(external_InteractionActionProvider_cjs_namespaceObject.InteractionActionItemContext);
    if (!contextValue) throw new Error('STON.ERROR.DEV - InteractionActionItemContext accessed without provider');
    const { defaultAction, runCurrentAction, setCurrentAction, cleanupCurrentAction } = contextValue;
    const itemAction = (0, external_react_namespaceObject.useCallback)(()=>{
        if (!disabled) {
            var _this;
            return null == (_this = action || defaultAction) ? void 0 : _this(payload, uuid);
        }
    }, [
        action,
        defaultAction,
        payload,
        uuid,
        disabled
    ]);
    const onClick = (0, external_react_namespaceObject.useCallback)(()=>{
        if (!disabled) {
            setCurrentAction(itemAction);
            runCurrentAction();
        }
    }, [
        setCurrentAction,
        runCurrentAction,
        itemAction,
        disabled
    ]);
    (0, external_react_namespaceObject.useEffect)(()=>{
        if (isCurrent) setCurrentAction(itemAction);
        return ()=>{
            cleanupCurrentAction(itemAction);
        };
    }, [
        isCurrent,
        setCurrentAction,
        itemAction,
        cleanupCurrentAction
    ]);
    return (0, external_react_namespaceObject.useMemo)(()=>({
            disabled,
            uuid,
            onClick
        }), [
        uuid,
        onClick,
        disabled
    ]);
};
exports.useInteractionActionItem = __webpack_exports__.useInteractionActionItem;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "useInteractionActionItem"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
