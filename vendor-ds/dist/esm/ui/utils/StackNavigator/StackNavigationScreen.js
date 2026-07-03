import { useStackNavigatorContext } from "./StackNavigatorContext.js";
const StackNavigationScreen = ({ children, slug })=>{
    const navigator = useStackNavigatorContext();
    if (navigator && navigator.checkIsCurrentSlug(slug)) {
        if ('function' == typeof children) return children({
            back: navigator.back
        });
        return children;
    }
    return null;
};
export { StackNavigationScreen };
