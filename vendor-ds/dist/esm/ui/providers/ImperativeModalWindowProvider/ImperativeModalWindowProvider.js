import react, { useCallback, useMemo, useState } from "react";
import { ModalWindow } from "../../components/ModalWindow/index.js";
const ImperativeModalWindowContext = /*#__PURE__*/ react.createContext(null);
const defaultState = {
    component: void 0,
    componentProps: {},
    modalWindowOptions: {}
};
const ImperativeModalWindowProvider = ({ children })=>{
    const [state, setState] = useState(defaultState);
    const openComponent = setState;
    const open = useCallback((content, modalWindowOptions)=>{
        openComponent({
            component: react.Fragment,
            componentProps: {
                children: content
            },
            modalWindowOptions: modalWindowOptions || defaultState.modalWindowOptions
        });
    }, [
        openComponent
    ]);
    const contextValue = useMemo(()=>({
            open,
            openComponent,
            close: ()=>{
                setState(defaultState);
            }
        }), [
        open,
        openComponent
    ]);
    const ModalContentComponent = null == state ? void 0 : state.component;
    return /*#__PURE__*/ react.createElement(ImperativeModalWindowContext.Provider, {
        value: contextValue
    }, children, /*#__PURE__*/ react.createElement(ModalWindow, state.modalWindowOptions, ModalContentComponent && /*#__PURE__*/ react.createElement(ModalContentComponent, state.componentProps)));
};
export { ImperativeModalWindowContext, ImperativeModalWindowProvider };
