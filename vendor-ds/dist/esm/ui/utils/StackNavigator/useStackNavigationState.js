import { useCallback, useMemo, useState } from "react";
import { useStackNavigatorContext } from "./StackNavigatorContext.js";
const useStackNavigationState = (slug)=>{
    const parentNavigator = useStackNavigatorContext();
    const isNested = !!parentNavigator;
    const [navigationStack, setNavigationStack] = useState([
        slug
    ]);
    const pushState = useCallback((path)=>setNavigationStack((prev)=>[
                ...prev,
                path
            ]), []);
    const back = useCallback(()=>{
        if (isNested) if (navigationStack.at(-1) === slug) parentNavigator.back();
        else setNavigationStack((prev)=>prev.slice(0, -1));
        else setNavigationStack((prev)=>prev.length > 1 ? prev.slice(0, -1) : prev);
    }, [
        isNested,
        parentNavigator,
        navigationStack,
        slug
    ]);
    const reset = useCallback(()=>setNavigationStack([
            slug
        ]), [
        slug
    ]);
    const canGoBack = useMemo(()=>{
        if (!isNested) return navigationStack.length > 1;
        if (navigationStack.at(-1) === slug) return !!(null == parentNavigator ? void 0 : parentNavigator.canGoBack);
        return navigationStack.length > 1;
    }, [
        isNested,
        navigationStack,
        parentNavigator,
        slug
    ]);
    const checkIsCurrentSlug = useCallback((s)=>navigationStack.at(-1) === s, [
        navigationStack
    ]);
    const isActive = useMemo(()=>!isNested || (null == parentNavigator ? void 0 : parentNavigator.checkIsCurrentSlug(slug)), [
        isNested,
        parentNavigator,
        slug
    ]);
    return useMemo(()=>({
            pushState,
            back,
            reset,
            navigationStack,
            rootSlug: slug,
            isActive,
            checkIsCurrentSlug,
            isNested,
            canGoBack
        }), [
        pushState,
        back,
        reset,
        navigationStack,
        slug,
        isActive,
        checkIsCurrentSlug,
        isNested,
        canGoBack
    ]);
};
export { useStackNavigationState };
