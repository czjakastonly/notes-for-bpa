import { tabbable } from "tabbable";
import { STATIC_CLASS_NAME } from "../../constants.js";
const getFocusableNodes = (element)=>tabbable(element, {
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
    if (!focusLockContainer.className.includes(STATIC_CLASS_NAME.focusLocked)) {
        console.warn('STON:WARNING - getIsElementTopFocusLock executed with the element without proper className');
        return false;
    }
    if (focusLockContainer.querySelectorAll(`.${STATIC_CLASS_NAME.focusLocked}`).length) return false;
    const focusLockInPortalList = document.querySelectorAll(`body > .${STATIC_CLASS_NAME.portal} .${STATIC_CLASS_NAME.focusLocked}`);
    if (focusLockInPortalList.length) return focusLockInPortalList[focusLockInPortalList.length - 1] === focusLockContainer;
    return true;
};
export { getIsElementTopFocusLock, handleFocusLockTabPress };
