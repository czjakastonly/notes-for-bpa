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
    InteractionHighlightProvider: ()=>InteractionHighlightProvider,
    InteractionHighlightItemContext: ()=>InteractionHighlightItemContext,
    InteractionHighlightContainerContext: ()=>InteractionHighlightContainerContext
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const useGetWasLastEventTypeKeyboard_cjs_namespaceObject = require("../../../providers/LastEventProvider/useGetWasLastEventTypeKeyboard.cjs");
const config = {
    ITEM_UUID_ATTR: 'data-h-uuid',
    ITEM_DISABLED_ATTR: 'data-h-dis',
    ITEM_PRIORITIZED_ATTR: 'data-h-pri',
    ITEM_NODE_QUERY: '[data-h-uuid]',
    readUuidFromNode: (node)=>{
        var _node_dataset;
        return null == node ? void 0 : null == (_node_dataset = node.dataset) ? void 0 : _node_dataset.hUuid;
    },
    readIsEnabledFromNode: (node)=>{
        var _node_dataset;
        return (null == node ? void 0 : null == (_node_dataset = node.dataset) ? void 0 : _node_dataset.hDis) !== 'true';
    },
    readIsPrioritizedHighlightFromNode: (node)=>{
        var _node_dataset;
        return (null == node ? void 0 : null == (_node_dataset = node.dataset) ? void 0 : _node_dataset.hPri) === 'true';
    }
};
const InteractionHighlightItemContext = /*#__PURE__*/ external_react_default().createContext(null);
const InteractionHighlightContainerContext = /*#__PURE__*/ external_react_default().createContext(null);
const InteractionHighlightProvider = ({ children })=>{
    const containerRef = (0, external_react_namespaceObject.useRef)(null);
    const getWasLastEventTypeKeyboard = (0, useGetWasLastEventTypeKeyboard_cjs_namespaceObject.useGetWasLastEventTypeKeyboard)();
    const [currentHighlightedUuid, setCurrentHighlightedUuid] = (0, external_react_namespaceObject.useState)('');
    const queryInteractionNodeList = (0, external_react_namespaceObject.useCallback)(()=>{
        var _containerRef_current;
        return Array.from((null == (_containerRef_current = containerRef.current) ? void 0 : _containerRef_current.querySelectorAll(config.ITEM_NODE_QUERY)) || []);
    }, []);
    const highlightUuid = (0, external_react_namespaceObject.useCallback)((uuid)=>{
        setCurrentHighlightedUuid(uuid);
    }, []);
    const findClosestUuidInNodeList = (0, external_react_namespaceObject.useCallback)(({ nodeList, direction, startIndex })=>{
        const DELTA = 'next' === direction ? 1 : -1;
        let searchingIndex = Number.isInteger(startIndex) ? startIndex : 0;
        while(nodeList[searchingIndex]){
            const nodeUuid = config.readUuidFromNode(nodeList[searchingIndex]);
            if (nodeUuid && config.readIsEnabledFromNode(nodeList[searchingIndex])) return nodeUuid;
            searchingIndex += DELTA;
        }
    }, []);
    const findClosestPrioritizedHighlightedUuidInNodeList = (0, external_react_namespaceObject.useCallback)(({ nodeList, direction = 'next' })=>{
        const autoHighlightedUuidList = nodeList.filter(config.readIsPrioritizedHighlightFromNode).filter(config.readIsEnabledFromNode).map(config.readUuidFromNode);
        return 'next' === direction ? autoHighlightedUuidList.shift() : autoHighlightedUuidList.pop();
    }, []);
    const getCurrentStateMetadata = (0, external_react_namespaceObject.useCallback)(()=>{
        const interactionNodeList = queryInteractionNodeList();
        const highlightedNodeIndex = currentHighlightedUuid ? interactionNodeList.findIndex((rowNode)=>config.readUuidFromNode(rowNode) === currentHighlightedUuid) : -1;
        const highlightedNodeElement = interactionNodeList[highlightedNodeIndex];
        return {
            interactionNodeList,
            highlightedNodeIndex,
            highlightedNodeElement
        };
    }, [
        queryInteractionNodeList,
        currentHighlightedUuid
    ]);
    const findUuidToHighlight = (0, external_react_namespaceObject.useCallback)((direction)=>{
        const { interactionNodeList, highlightedNodeIndex } = getCurrentStateMetadata();
        let newHighlightedUuid;
        if (!currentHighlightedUuid) newHighlightedUuid = findClosestPrioritizedHighlightedUuidInNodeList({
            nodeList: interactionNodeList,
            direction
        });
        if (!newHighlightedUuid) newHighlightedUuid = -1 === highlightedNodeIndex ? findClosestUuidInNodeList({
            nodeList: interactionNodeList,
            direction,
            startIndex: 'next' === direction ? 0 : interactionNodeList.length - 1
        }) : findClosestUuidInNodeList({
            nodeList: interactionNodeList,
            direction,
            startIndex: highlightedNodeIndex + ('next' === direction ? 1 : -1)
        });
        return newHighlightedUuid;
    }, [
        getCurrentStateMetadata,
        findClosestUuidInNodeList,
        findClosestPrioritizedHighlightedUuidInNodeList,
        currentHighlightedUuid
    ]);
    const handleArrowDownPressed = (0, external_react_namespaceObject.useCallback)((e)=>{
        e.preventDefault();
        const newHighlightedUuid = findUuidToHighlight('next');
        if (newHighlightedUuid) highlightUuid(newHighlightedUuid);
    }, [
        findUuidToHighlight,
        highlightUuid
    ]);
    const handleArrowUpPressed = (0, external_react_namespaceObject.useCallback)((e)=>{
        e.preventDefault();
        const newHighlightedUuid = findUuidToHighlight('previous');
        if (newHighlightedUuid) highlightUuid(newHighlightedUuid);
    }, [
        findUuidToHighlight,
        highlightUuid
    ]);
    const handleMouseMove = (0, external_react_namespaceObject.useCallback)((e)=>{
        e.preventDefault();
        const node = e.target.closest(config.ITEM_NODE_QUERY);
        const uuid = config.readUuidFromNode(node);
        uuid && config.readIsEnabledFromNode(node) ? highlightUuid(uuid) : highlightUuid('');
    }, [
        highlightUuid
    ]);
    const handleBlur = (0, external_react_namespaceObject.useCallback)(()=>{
        highlightUuid('');
    }, [
        highlightUuid
    ]);
    const handleFocus = (0, external_react_namespaceObject.useCallback)(()=>{
        const wasLastEventTypeKeyboard = getWasLastEventTypeKeyboard();
        if (wasLastEventTypeKeyboard) {
            const newHighlightedUuid = currentHighlightedUuid || findUuidToHighlight('next');
            if (newHighlightedUuid) highlightUuid(newHighlightedUuid);
        }
    }, [
        findUuidToHighlight,
        highlightUuid,
        currentHighlightedUuid,
        getWasLastEventTypeKeyboard
    ]);
    return /*#__PURE__*/ external_react_default().createElement(InteractionHighlightContainerContext.Provider, {
        value: (0, external_react_namespaceObject.useMemo)(()=>({
                highlightedUuid: null != currentHighlightedUuid ? currentHighlightedUuid : '',
                handleArrowDownPressed,
                handleArrowUpPressed,
                handleFocus,
                handleBlur,
                handleMouseMove,
                containerRef
            }), [
            handleBlur,
            handleArrowDownPressed,
            handleArrowUpPressed,
            currentHighlightedUuid,
            handleMouseMove,
            handleFocus
        ])
    }, /*#__PURE__*/ external_react_default().createElement(InteractionHighlightItemContext.Provider, {
        value: (0, external_react_namespaceObject.useMemo)(()=>({
                highlightedUuid: null != currentHighlightedUuid ? currentHighlightedUuid : '',
                ITEM_PRIORITIZED_ATTR: config.ITEM_PRIORITIZED_ATTR,
                ITEM_UUID_ATTR: config.ITEM_UUID_ATTR,
                ITEM_DISABLED_ATTR: config.ITEM_DISABLED_ATTR
            }), [
            currentHighlightedUuid
        ])
    }, children));
};
exports.InteractionHighlightContainerContext = __webpack_exports__.InteractionHighlightContainerContext;
exports.InteractionHighlightItemContext = __webpack_exports__.InteractionHighlightItemContext;
exports.InteractionHighlightProvider = __webpack_exports__.InteractionHighlightProvider;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "InteractionHighlightContainerContext",
    "InteractionHighlightItemContext",
    "InteractionHighlightProvider"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
