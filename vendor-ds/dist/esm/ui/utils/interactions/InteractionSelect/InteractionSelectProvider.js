import react, { useMemo } from "react";
const InteractionSelectContext = /*#__PURE__*/ react.createContext({});
const InteractionSelectProvider = ({ selectedValue, children })=>/*#__PURE__*/ react.createElement(InteractionSelectContext.Provider, {
        value: useMemo(()=>({
                selectedValue
            }), [
            selectedValue
        ])
    }, children);
export { InteractionSelectContext, InteractionSelectProvider };
