import { useContext } from "react";
import { InteractionScrollContext } from "./InteractionScrollProvider.js";
const useInteractionScrollContainer = ()=>{
    const contextValue = useContext(InteractionScrollContext);
    if (!contextValue) throw new Error('STON.ERROR.DEV - InteractionScrollContext accessed without provider');
    return contextValue;
};
export { useInteractionScrollContainer };
