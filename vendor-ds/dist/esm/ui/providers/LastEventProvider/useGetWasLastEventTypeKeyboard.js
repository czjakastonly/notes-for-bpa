import { useContext } from "react";
import { LastEventContext } from "./LastEventProvider.js";
function useGetWasLastEventTypeKeyboard() {
    const context = useContext(LastEventContext);
    if (void 0 === context) throw new Error('useGetWasLastEventTypeKeyboard must be used within a LastEventProvider');
    return context.getWasLastEventTypeKeyboard;
}
export { useGetWasLastEventTypeKeyboard };
