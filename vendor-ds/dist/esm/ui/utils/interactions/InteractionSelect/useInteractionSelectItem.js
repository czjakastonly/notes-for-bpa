import { useContext, useMemo } from "react";
import { InteractionSelectContext } from "./InteractionSelectProvider.js";
const useInteractionSelectItem = ({ value, uuid })=>{
    const contextValue = useContext(InteractionSelectContext);
    if (!contextValue) throw new Error('STON.ERROR.MissingContext.InteractionSelectContext');
    const { selectedValue } = contextValue;
    const isSelected = !!value && (Array.isArray(selectedValue) ? selectedValue.includes(value) : selectedValue === value);
    return useMemo(()=>({
            isSelected,
            uuid
        }), [
        isSelected,
        uuid
    ]);
};
export { useInteractionSelectItem };
