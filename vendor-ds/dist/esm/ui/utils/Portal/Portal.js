import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { zIndex } from "../../atoms/zIndex.js";
import { useDomId } from "../domId.js";
import { STATIC_CLASS_NAME } from "../../constants.js";
const DOM_CLEANUP_TIMEOUT = 100;
const PORTAL_Z_INDEX = zIndex.modal;
const createPortalNode = (id, propsZIndex = PORTAL_Z_INDEX)=>{
    const el = document.createElement('div');
    if (id) el.setAttribute('id', id);
    el.className = STATIC_CLASS_NAME.portal;
    el.style.position = 'relative';
    el.style.zIndex = String(propsZIndex);
    document.body.append(el);
    return el;
};
const Portal = ({ children, zIndex: propsZIndex })=>{
    const [container, setContainer] = useState();
    const domId = useDomId();
    useEffect(()=>{
        setContainer(document.getElementById(domId) || createPortalNode(domId, propsZIndex));
        return ()=>{
            if (!container) return;
            setTimeout(()=>{
                if ('' === container.innerHTML) container.remove();
            }, DOM_CLEANUP_TIMEOUT);
        };
    }, [
        container,
        domId
    ]);
    return container ? /*#__PURE__*/ createPortal(children, container) : null;
};
export { Portal };
