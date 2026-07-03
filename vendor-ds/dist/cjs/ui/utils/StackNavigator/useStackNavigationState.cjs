"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ("u" > typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    useStackNavigationState: ()=>useStackNavigationState
});
const external_react_namespaceObject = require("react");
const external_StackNavigatorContext_cjs_namespaceObject = require("./StackNavigatorContext.cjs");
const useStackNavigationState = (slug)=>{
    const parentNavigator = (0, external_StackNavigatorContext_cjs_namespaceObject.useStackNavigatorContext)();
    const isNested = !!parentNavigator;
    const [navigationStack, setNavigationStack] = (0, external_react_namespaceObject.useState)([
        slug
    ]);
    const pushState = (0, external_react_namespaceObject.useCallback)((path)=>setNavigationStack((prev)=>[
                ...prev,
                path
            ]), []);
    const back = (0, external_react_namespaceObject.useCallback)(()=>{
        if (isNested) if (navigationStack.at(-1) === slug) parentNavigator.back();
        else setNavigationStack((prev)=>prev.slice(0, -1));
        else setNavigationStack((prev)=>prev.length > 1 ? prev.slice(0, -1) : prev);
    }, [
        isNested,
        parentNavigator,
        navigationStack,
        slug
    ]);
    const reset = (0, external_react_namespaceObject.useCallback)(()=>setNavigationStack([
            slug
        ]), [
        slug
    ]);
    const canGoBack = (0, external_react_namespaceObject.useMemo)(()=>{
        if (!isNested) return navigationStack.length > 1;
        if (navigationStack.at(-1) === slug) return !!(null == parentNavigator ? void 0 : parentNavigator.canGoBack);
        return navigationStack.length > 1;
    }, [
        isNested,
        navigationStack,
        parentNavigator,
        slug
    ]);
    const checkIsCurrentSlug = (0, external_react_namespaceObject.useCallback)((s)=>navigationStack.at(-1) === s, [
        navigationStack
    ]);
    const isActive = (0, external_react_namespaceObject.useMemo)(()=>!isNested || (null == parentNavigator ? void 0 : parentNavigator.checkIsCurrentSlug(slug)), [
        isNested,
        parentNavigator,
        slug
    ]);
    return (0, external_react_namespaceObject.useMemo)(()=>({
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
exports.useStackNavigationState = __webpack_exports__.useStackNavigationState;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "useStackNavigationState"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
