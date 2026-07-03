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
    Portal: ()=>Portal
});
const external_react_namespaceObject = require("react");
const external_react_dom_namespaceObject = require("react-dom");
const zIndex_cjs_namespaceObject = require("../../atoms/zIndex.cjs");
const external_domId_cjs_namespaceObject = require("../domId.cjs");
const external_constants_cjs_namespaceObject = require("../../constants.cjs");
const DOM_CLEANUP_TIMEOUT = 100;
const PORTAL_Z_INDEX = zIndex_cjs_namespaceObject.zIndex.modal;
const createPortalNode = (id, propsZIndex = PORTAL_Z_INDEX)=>{
    const el = document.createElement('div');
    if (id) el.setAttribute('id', id);
    el.className = external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.portal;
    el.style.position = 'relative';
    el.style.zIndex = String(propsZIndex);
    document.body.append(el);
    return el;
};
const Portal = ({ children, zIndex: propsZIndex })=>{
    const [container, setContainer] = (0, external_react_namespaceObject.useState)();
    const domId = (0, external_domId_cjs_namespaceObject.useDomId)();
    (0, external_react_namespaceObject.useEffect)(()=>{
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
    return container ? /*#__PURE__*/ (0, external_react_dom_namespaceObject.createPortal)(children, container) : null;
};
exports.Portal = __webpack_exports__.Portal;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "Portal"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
