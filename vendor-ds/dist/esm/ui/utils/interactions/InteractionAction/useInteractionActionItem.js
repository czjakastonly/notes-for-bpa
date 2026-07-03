import { useCallback, useContext, useEffect, useMemo } from "react";
import { InteractionActionItemContext } from "./InteractionActionProvider.js";
const useInteractionActionItem = ({ uuid, action, payload, disabled, isCurrent })=>{
    const contextValue = useContext(InteractionActionItemContext);
    if (!contextValue) throw new Error('STON.ERROR.DEV - InteractionActionItemContext accessed without provider');
    const { defaultAction, runCurrentAction, setCurrentAction, cleanupCurrentAction } = contextValue;
    const itemAction = useCallback(()=>{
        if (!disabled) {
            var _this;
            return null == (_this = action || defaultAction) ? void 0 : _this(payload, uuid);
        }
    }, [
        action,
        defaultAction,
        payload,
        uuid,
        disabled
    ]);
    const onClick = useCallback(()=>{
        if (!disabled) {
            setCurrentAction(itemAction);
            runCurrentAction();
        }
    }, [
        setCurrentAction,
        runCurrentAction,
        itemAction,
        disabled
    ]);
    useEffect(()=>{
        if (isCurrent) setCurrentAction(itemAction);
        return ()=>{
            cleanupCurrentAction(itemAction);
        };
    }, [
        isCurrent,
        setCurrentAction,
        itemAction,
        cleanupCurrentAction
    ]);
    return useMemo(()=>({
            disabled,
            uuid,
            onClick
        }), [
        uuid,
        onClick,
        disabled
    ]);
};
export { useInteractionActionItem };
