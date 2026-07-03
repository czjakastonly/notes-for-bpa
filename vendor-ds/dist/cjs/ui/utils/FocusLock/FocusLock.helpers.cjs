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
    handleFocusLockTabPress: ()=>handleFocusLockTabPress,
    getIsElementTopFocusLock: ()=>getIsElementTopFocusLock
});
const external_tabbable_namespaceObject = require("tabbable");
const external_constants_cjs_namespaceObject = require("../../constants.cjs");
const getFocusableNodes = (element)=>(0, external_tabbable_namespaceObject.tabbable)(element, {
        includeContainer: true,
        displayCheck: 'full',
        getShadowRoot: false
    });
const handleFocusLockTabPress = (element, event)=>{
    const focusableNodes = getFocusableNodes(element);
    if (!focusableNodes.length) return;
    const focusedElement = focusableNodes[0];
    if (element.contains(document.activeElement)) {
        const focusedItemIndex = focusableNodes.indexOf(document.activeElement);
        if (event.shiftKey && 0 === focusedItemIndex) {
            focusableNodes[focusableNodes.length - 1].focus();
            event.preventDefault();
        }
        if (!event.shiftKey && focusedItemIndex === focusableNodes.length - 1) {
            focusedElement.focus();
            event.preventDefault();
        }
        return focusableNodes[focusedItemIndex];
    }
    focusedElement.focus();
    event.preventDefault();
    return focusedElement;
};
const getIsElementTopFocusLock = (focusLockContainer)=>{
    if (!focusLockContainer) return false;
    if (!focusLockContainer.className.includes(external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.focusLocked)) {
        console.warn('STON:WARNING - getIsElementTopFocusLock executed with the element without proper className');
        return false;
    }
    if (focusLockContainer.querySelectorAll(`.${external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.focusLocked}`).length) return false;
    const focusLockInPortalList = document.querySelectorAll(`body > .${external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.portal} .${external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.focusLocked}`);
    if (focusLockInPortalList.length) return focusLockInPortalList[focusLockInPortalList.length - 1] === focusLockContainer;
    return true;
};
exports.getIsElementTopFocusLock = __webpack_exports__.getIsElementTopFocusLock;
exports.handleFocusLockTabPress = __webpack_exports__.handleFocusLockTabPress;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "getIsElementTopFocusLock",
    "handleFocusLockTabPress"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
