import { useCallback, useEffect, useState } from "react";
const useDomElementSize = (ref)=>{
    const [refWidth, setRefWidth] = useState();
    const calcRefWidth = useCallback(()=>{
        if (ref && ref.current) setRefWidth(ref.current.clientWidth);
    }, [
        ref
    ]);
    useEffect(()=>{
        calcRefWidth();
        if (ref && ref.current) window.addEventListener('resize', calcRefWidth);
        return ()=>{
            window.removeEventListener('resize', calcRefWidth);
        };
    }, [
        ref,
        calcRefWidth
    ]);
    return {
        width: refWidth
    };
};
export { useDomElementSize };
