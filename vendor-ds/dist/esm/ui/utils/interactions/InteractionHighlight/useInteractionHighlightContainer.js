import { useContext } from "react";
import { InteractionHighlightContainerContext } from "./InteractionHighlightProvider.js";
const useInteractionHighlightContainer = ()=>{
    const contextValue = useContext(InteractionHighlightContainerContext);
    if (!contextValue) throw new Error('STON.ERROR.DEV - useInteractionHighlightContainer accessed without provider');
    return contextValue;
};
export { useInteractionHighlightContainer };
