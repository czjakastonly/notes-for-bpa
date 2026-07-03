import react, { useEffect, useRef } from "react";
import { STATIC_CLASS_NAME } from "../../constants.js";
import { getIsElementTopFocusLock, handleFocusLockTabPress } from "./FocusLock.helpers.js";
const FocusLock = ({ children, isFocusLocked = true })=>{
    const lockContainerRef = useRef(null);
    useEffect(()=>{
        if (isFocusLocked) {
            const keyDownListener = (event)=>{
                if ('Tab' === event.key && lockContainerRef.current && getIsElementTopFocusLock(null == lockContainerRef ? void 0 : lockContainerRef.current)) handleFocusLockTabPress(lockContainerRef.current, event);
            };
            document.addEventListener('keydown', keyDownListener);
            return ()=>{
                document.removeEventListener('keydown', keyDownListener);
            };
        }
    }, [
        isFocusLocked
    ]);
    return /*#__PURE__*/ react.createElement("div", {
        className: isFocusLocked ? STATIC_CLASS_NAME.focusLocked : void 0,
        ref: lockContainerRef
    }, children);
};
export { FocusLock };
