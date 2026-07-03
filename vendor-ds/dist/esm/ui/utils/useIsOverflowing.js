import { useCallback, useEffect, useRef, useState } from "react";
function useIsOverflowing() {
    const ref = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const checkOverflow = useCallback(()=>{
        if (ref.current) setIsOverflowing(ref.current.scrollWidth > ref.current.offsetWidth);
    }, []);
    useEffect(()=>{
        checkOverflow();
        const el = ref.current;
        if (!el) return;
        const observer = new ResizeObserver(checkOverflow);
        observer.observe(el);
        return ()=>observer.disconnect();
    }, [
        checkOverflow
    ]);
    return {
        ref,
        isOverflowing
    };
}
export { useIsOverflowing };
