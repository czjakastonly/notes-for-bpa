import react, { createContext, useCallback, useEffect, useMemo, useRef } from "react";
const LastEventContext = /*#__PURE__*/ createContext(void 0);
function LastEventProvider({ children }) {
    const wasLastEventTypeKeyboard = useRef(false);
    useEffect(()=>{
        const setWasLastEventKeyboard = ()=>{
            wasLastEventTypeKeyboard.current = true;
        };
        const setWasLastEventTypeNotKeyboard = ()=>{
            wasLastEventTypeKeyboard.current = false;
        };
        window.addEventListener('keydown', setWasLastEventKeyboard);
        window.addEventListener('mousedown', setWasLastEventTypeNotKeyboard);
        return ()=>{
            window.removeEventListener('keydown', setWasLastEventKeyboard);
            window.removeEventListener('mousedown', setWasLastEventTypeNotKeyboard);
        };
    }, []);
    const getWasLastEventTypeKeyboard = useCallback(()=>!!wasLastEventTypeKeyboard.current, []);
    return /*#__PURE__*/ react.createElement(LastEventContext.Provider, {
        value: useMemo(()=>({
                getWasLastEventTypeKeyboard
            }), [
            getWasLastEventTypeKeyboard
        ])
    }, children);
}
export { LastEventContext, LastEventProvider };
