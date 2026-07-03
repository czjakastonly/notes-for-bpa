import { useEffect, useRef } from "react";
import { debounce } from "lodash";
function useDomElementResizeEvents({ delay: debounceMs = 200, targetRef, onResizeStart, onResizeEnd }) {
    const isResizingRef = useRef(false);
    const startRef = useRef(onResizeStart);
    const endRef = useRef(onResizeEnd);
    useEffect(()=>{
        startRef.current = onResizeStart;
        endRef.current = onResizeEnd;
    }, [
        onResizeStart,
        onResizeEnd
    ]);
    useEffect(()=>{
        if (!(null == targetRef ? void 0 : targetRef.current)) return;
        const handleResizeEnd = debounce(()=>{
            if (isResizingRef.current) {
                var _endRef_current;
                isResizingRef.current = false;
                null == (_endRef_current = endRef.current) || _endRef_current.call(endRef, targetRef.current);
            }
        }, debounceMs);
        const onResize = ()=>{
            if (!isResizingRef.current) {
                var _startRef_current;
                isResizingRef.current = true;
                null == (_startRef_current = startRef.current) || _startRef_current.call(startRef, targetRef.current);
            }
            handleResizeEnd();
        };
        const observer = new ResizeObserver(onResize);
        observer.observe(targetRef.current);
        return ()=>{
            observer.disconnect();
            handleResizeEnd.cancel();
        };
    }, [
        targetRef,
        debounceMs
    ]);
}
export { useDomElementResizeEvents };
