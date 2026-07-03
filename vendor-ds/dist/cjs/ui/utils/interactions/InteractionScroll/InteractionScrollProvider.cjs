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
    InteractionScrollContext: ()=>InteractionScrollContext,
    InteractionScrollProvider: ()=>InteractionScrollProvider
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const config = {
    ITEM_UUID_ATTR: 'data-s-uuid',
    ITEM_NODE_QUERY: '[data-s-uuid]',
    ITEM_PRIORITIZED_ATTR: 'data-s-pri',
    ITEM_PRIORITIZED_QUERY: '[data-s-pri]'
};
const InteractionScrollContext = /*#__PURE__*/ external_react_default().createContext(null);
const InteractionScrollProvider = ({ children })=>{
    const containerRef = (0, external_react_namespaceObject.useRef)(null);
    const [uuidToKeepIntoView, setUuidToKeepIntoView] = (0, external_react_namespaceObject.useState)('');
    const queryNodeByInteractionUuid = (0, external_react_namespaceObject.useCallback)((uuid)=>{
        var _containerRef_current;
        const domQuery = `[${config.ITEM_UUID_ATTR}='${uuid}']${config.ITEM_NODE_QUERY}`;
        const node = null == (_containerRef_current = containerRef.current) ? void 0 : _containerRef_current.querySelector(domQuery);
        return null != node ? node : void 0;
    }, []);
    const queryPrioritizedNode = (0, external_react_namespaceObject.useCallback)(()=>{
        var _containerRef_current;
        const node = null == (_containerRef_current = containerRef.current) ? void 0 : _containerRef_current.querySelector(config.ITEM_PRIORITIZED_QUERY);
        return null != node ? node : void 0;
    }, []);
    (0, external_react_namespaceObject.useLayoutEffect)(()=>{
        const node = queryPrioritizedNode();
        null == node || node.scrollIntoView({
            behavior: 'instant',
            block: 'nearest'
        });
    }, []);
    (0, external_react_namespaceObject.useLayoutEffect)(()=>{
        if (uuidToKeepIntoView) {
            const node = queryNodeByInteractionUuid(uuidToKeepIntoView);
            null == node || node.scrollIntoView({
                behavior: 'instant',
                block: 'nearest'
            });
        }
    }, [
        uuidToKeepIntoView,
        queryNodeByInteractionUuid
    ]);
    return /*#__PURE__*/ external_react_default().createElement(InteractionScrollContext.Provider, {
        value: (0, external_react_namespaceObject.useMemo)(()=>({
                setUuidToKeepIntoView,
                containerRef,
                ITEM_UUID_ATTR: config.ITEM_UUID_ATTR,
                ITEM_PRIORITIZED_ATTR: config.ITEM_PRIORITIZED_ATTR
            }), [
            setUuidToKeepIntoView
        ])
    }, children);
};
exports.InteractionScrollContext = __webpack_exports__.InteractionScrollContext;
exports.InteractionScrollProvider = __webpack_exports__.InteractionScrollProvider;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "InteractionScrollContext",
    "InteractionScrollProvider"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
