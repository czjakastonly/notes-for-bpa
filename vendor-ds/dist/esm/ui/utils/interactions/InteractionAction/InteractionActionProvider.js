import react, { useCallback, useMemo, useRef } from "react";
import { isSpaceHandledByTargetEvent } from "../../domEvent.helpers.js";
const InteractionActionItemContext = /*#__PURE__*/ react.createContext(null);
const InteractionActionContainerContext = /*#__PURE__*/ react.createContext(null);
const InteractionActionProvider = ({ children, defaultAction, onPostAction })=>{
    const currentActionRef = useRef();
    const setCurrentAction = useCallback((action)=>{
        currentActionRef.current = action;
    }, []);
    const cleanupCurrentAction = useCallback((callback)=>{
        if (currentActionRef.current === callback) currentActionRef.current = void 0;
    }, []);
    const runCurrentAction = useCallback(()=>{
        var _currentActionRef_current;
        const actionResult = null == (_currentActionRef_current = currentActionRef.current) ? void 0 : _currentActionRef_current.call(currentActionRef);
        if (!(null == actionResult ? void 0 : actionResult.preventPostAction)) null == onPostAction || onPostAction();
    }, [
        onPostAction
    ]);
    const handleEnterPressed = useCallback((e)=>{
        e.preventDefault();
        runCurrentAction();
    }, [
        runCurrentAction
    ]);
    const handleSpacePressed = useCallback((e)=>{
        var _e_persist;
        null == (_e_persist = e.persist) || _e_persist.call(e);
        if (!isSpaceHandledByTargetEvent(e)) {
            e.preventDefault();
            runCurrentAction();
        }
    }, [
        runCurrentAction
    ]);
    return /*#__PURE__*/ react.createElement(InteractionActionContainerContext.Provider, {
        value: useMemo(()=>({
                handleEnterPressed,
                handleSpacePressed
            }), [
            handleEnterPressed,
            handleSpacePressed
        ])
    }, /*#__PURE__*/ react.createElement(InteractionActionItemContext.Provider, {
        value: useMemo(()=>({
                defaultAction,
                setCurrentAction,
                runCurrentAction,
                cleanupCurrentAction
            }), [
            defaultAction,
            setCurrentAction,
            runCurrentAction,
            cleanupCurrentAction
        ])
    }, children));
};
export { InteractionActionContainerContext, InteractionActionItemContext, InteractionActionProvider };
