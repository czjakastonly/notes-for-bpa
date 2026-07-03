import react from "react";
import { useStackNavigationState } from "./useStackNavigationState.js";
import { StackNavigatorContext } from "./StackNavigatorContext.js";
const StackNavigator = ({ children, navigator: xorNavigator, slug: xorInitialSlug })=>{
    const slug = xorNavigator && xorNavigator.rootSlug || xorInitialSlug;
    const selfNavigator = xorNavigator || useStackNavigationState(slug);
    if (!selfNavigator.isActive) return null;
    return /*#__PURE__*/ react.createElement(StackNavigatorContext.Provider, {
        value: selfNavigator
    }, children);
};
export { StackNavigator };
