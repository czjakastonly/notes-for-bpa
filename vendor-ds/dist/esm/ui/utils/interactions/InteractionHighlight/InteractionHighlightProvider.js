import react, { useCallback, useMemo, useRef, useState } from "react";
import { useGetWasLastEventTypeKeyboard } from "../../../providers/LastEventProvider/useGetWasLastEventTypeKeyboard.js";
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
const InteractionHighlightItemContext = /*#__PURE__*/ react.createContext(null);
const InteractionHighlightContainerContext = /*#__PURE__*/ react.createContext(null);
const InteractionHighlightProvider = ({ children })=>{
    const containerRef = useRef(null);
    const getWasLastEventTypeKeyboard = useGetWasLastEventTypeKeyboard();
    const [currentHighlightedUuid, setCurrentHighlightedUuid] = useState('');
    const queryInteractionNodeList = useCallback(()=>{
        var _containerRef_current;
        return Array.from((null == (_containerRef_current = containerRef.current) ? void 0 : _containerRef_current.querySelectorAll(config.ITEM_NODE_QUERY)) || []);
    }, []);
    const highlightUuid = useCallback((uuid)=>{
        setCurrentHighlightedUuid(uuid);
    }, []);
    const findClosestUuidInNodeList = useCallback(({ nodeList, direction, startIndex })=>{
        const DELTA = 'next' === direction ? 1 : -1;
        let searchingIndex = Number.isInteger(startIndex) ? startIndex : 0;
        while(nodeList[searchingIndex]){
            const nodeUuid = config.readUuidFromNode(nodeList[searchingIndex]);
            if (nodeUuid && config.readIsEnabledFromNode(nodeList[searchingIndex])) return nodeUuid;
            searchingIndex += DELTA;
        }
    }, []);
    const findClosestPrioritizedHighlightedUuidInNodeList = useCallback(({ nodeList, direction = 'next' })=>{
        const autoHighlightedUuidList = nodeList.filter(config.readIsPrioritizedHighlightFromNode).filter(config.readIsEnabledFromNode).map(config.readUuidFromNode);
        return 'next' === direction ? autoHighlightedUuidList.shift() : autoHighlightedUuidList.pop();
    }, []);
    const getCurrentStateMetadata = useCallback(()=>{
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
    const findUuidToHighlight = useCallback((direction)=>{
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
    const handleArrowDownPressed = useCallback((e)=>{
        e.preventDefault();
        const newHighlightedUuid = findUuidToHighlight('next');
        if (newHighlightedUuid) highlightUuid(newHighlightedUuid);
    }, [
        findUuidToHighlight,
        highlightUuid
    ]);
    const handleArrowUpPressed = useCallback((e)=>{
        e.preventDefault();
        const newHighlightedUuid = findUuidToHighlight('previous');
        if (newHighlightedUuid) highlightUuid(newHighlightedUuid);
    }, [
        findUuidToHighlight,
        highlightUuid
    ]);
    const handleMouseMove = useCallback((e)=>{
        e.preventDefault();
        const node = e.target.closest(config.ITEM_NODE_QUERY);
        const uuid = config.readUuidFromNode(node);
        uuid && config.readIsEnabledFromNode(node) ? highlightUuid(uuid) : highlightUuid('');
    }, [
        highlightUuid
    ]);
    const handleBlur = useCallback(()=>{
        highlightUuid('');
    }, [
        highlightUuid
    ]);
    const handleFocus = useCallback(()=>{
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
    return /*#__PURE__*/ react.createElement(InteractionHighlightContainerContext.Provider, {
        value: useMemo(()=>({
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
    }, /*#__PURE__*/ react.createElement(InteractionHighlightItemContext.Provider, {
        value: useMemo(()=>({
                highlightedUuid: null != currentHighlightedUuid ? currentHighlightedUuid : '',
                ITEM_PRIORITIZED_ATTR: config.ITEM_PRIORITIZED_ATTR,
                ITEM_UUID_ATTR: config.ITEM_UUID_ATTR,
                ITEM_DISABLED_ATTR: config.ITEM_DISABLED_ATTR
            }), [
            currentHighlightedUuid
        ])
    }, children));
};
export { InteractionHighlightContainerContext, InteractionHighlightItemContext, InteractionHighlightProvider };
