import { useEffect, useRef } from "react";
const useOnKeysDown = ({ eventKeyList, callback, condition = true })=>{
    const cachedCallback = useRef(callback);
    const eventKeyToken = eventKeyList.join('');
    useEffect(()=>{
        cachedCallback.current = callback;
    }, [
        callback
    ]);
    useEffect(()=>{
        if (condition) {
            const eventHandler = (event)=>{
                if (event.defaultPrevented) return;
                if (eventKeyList.includes(event.key)) cachedCallback.current(event);
            };
            window.addEventListener('keydown', eventHandler, true);
            return ()=>{
                window.removeEventListener('keydown', eventHandler, true);
            };
        }
    }, [
        callback,
        condition,
        eventKeyToken
    ]);
};
export { useOnKeysDown };
