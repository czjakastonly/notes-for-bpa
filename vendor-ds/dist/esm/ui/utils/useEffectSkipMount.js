import { useEffect, useRef } from "react";
function useEffectSkipMount(effect, deps) {
    const isFirstRun = useRef(true);
    useEffect(()=>{
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        return effect();
    }, deps);
}
export { useEffectSkipMount };
