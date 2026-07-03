import react, { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
const config = {
    ITEM_UUID_ATTR: 'data-s-uuid',
    ITEM_NODE_QUERY: '[data-s-uuid]',
    ITEM_PRIORITIZED_ATTR: 'data-s-pri',
    ITEM_PRIORITIZED_QUERY: '[data-s-pri]'
};
const InteractionScrollContext = /*#__PURE__*/ react.createContext(null);
const InteractionScrollProvider = ({ children })=>{
    const containerRef = useRef(null);
    const [uuidToKeepIntoView, setUuidToKeepIntoView] = useState('');
    const queryNodeByInteractionUuid = useCallback((uuid)=>{
        var _containerRef_current;
        const domQuery = `[${config.ITEM_UUID_ATTR}='${uuid}']${config.ITEM_NODE_QUERY}`;
        const node = null == (_containerRef_current = containerRef.current) ? void 0 : _containerRef_current.querySelector(domQuery);
        return null != node ? node : void 0;
    }, []);
    const queryPrioritizedNode = useCallback(()=>{
        var _containerRef_current;
        const node = null == (_containerRef_current = containerRef.current) ? void 0 : _containerRef_current.querySelector(config.ITEM_PRIORITIZED_QUERY);
        return null != node ? node : void 0;
    }, []);
    useLayoutEffect(()=>{
        const node = queryPrioritizedNode();
        null == node || node.scrollIntoView({
            behavior: 'instant',
            block: 'nearest'
        });
    }, []);
    useLayoutEffect(()=>{
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
    return /*#__PURE__*/ react.createElement(InteractionScrollContext.Provider, {
        value: useMemo(()=>({
                setUuidToKeepIntoView,
                containerRef,
                ITEM_UUID_ATTR: config.ITEM_UUID_ATTR,
                ITEM_PRIORITIZED_ATTR: config.ITEM_PRIORITIZED_ATTR
            }), [
            setUuidToKeepIntoView
        ])
    }, children);
};
export { InteractionScrollContext, InteractionScrollProvider };
