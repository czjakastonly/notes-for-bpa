import { useEffect, useRef } from "react";
const hasRefElementEventTargetInside = (ref, event)=>{
    if (!ref) return false;
    if (!event) return false;
    const { current: element } = ref;
    const { target } = event;
    return !!element && !!target && element.contains(target);
};
const useOnClickOutside = ({ elementRef, callback, exceptionRef, condition = true })=>{
    const cachedCallback = useRef(callback);
    useEffect(()=>{
        cachedCallback.current = callback;
    }, [
        callback
    ]);
    useEffect(()=>{
        if (condition) {
            const eventHandler = (event)=>{
                const clickedOnRef = hasRefElementEventTargetInside(elementRef, event);
                if (!clickedOnRef) {
                    const clickedOnException = hasRefElementEventTargetInside(exceptionRef, event);
                    if (!clickedOnException) cachedCallback.current(event);
                }
            };
            document.addEventListener('mousedown', eventHandler);
            document.addEventListener('touchstart', eventHandler);
            return ()=>{
                document.removeEventListener('mousedown', eventHandler);
                document.removeEventListener('touchstart', eventHandler);
            };
        }
    }, [
        elementRef,
        exceptionRef,
        condition
    ]);
};
export { useOnClickOutside };
