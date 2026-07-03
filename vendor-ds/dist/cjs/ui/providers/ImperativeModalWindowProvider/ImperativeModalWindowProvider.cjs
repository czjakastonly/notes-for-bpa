"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.n = (module)=>{
        var getter = module && module.__esModule ? ()=>module['default'] : ()=>module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
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
    ImperativeModalWindowProvider: ()=>ImperativeModalWindowProvider,
    ImperativeModalWindowContext: ()=>ImperativeModalWindowContext
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const index_cjs_namespaceObject = require("../../components/ModalWindow/index.cjs");
const ImperativeModalWindowContext = /*#__PURE__*/ external_react_default().createContext(null);
const defaultState = {
    component: void 0,
    componentProps: {},
    modalWindowOptions: {}
};
const ImperativeModalWindowProvider = ({ children })=>{
    const [state, setState] = (0, external_react_namespaceObject.useState)(defaultState);
    const openComponent = setState;
    const open = (0, external_react_namespaceObject.useCallback)((content, modalWindowOptions)=>{
        openComponent({
            component: external_react_default().Fragment,
            componentProps: {
                children: content
            },
            modalWindowOptions: modalWindowOptions || defaultState.modalWindowOptions
        });
    }, [
        openComponent
    ]);
    const contextValue = (0, external_react_namespaceObject.useMemo)(()=>({
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
    return /*#__PURE__*/ external_react_default().createElement(ImperativeModalWindowContext.Provider, {
        value: contextValue
    }, children, /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.ModalWindow, state.modalWindowOptions, ModalContentComponent && /*#__PURE__*/ external_react_default().createElement(ModalContentComponent, state.componentProps)));
};
exports.ImperativeModalWindowContext = __webpack_exports__.ImperativeModalWindowContext;
exports.ImperativeModalWindowProvider = __webpack_exports__.ImperativeModalWindowProvider;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ImperativeModalWindowContext",
    "ImperativeModalWindowProvider"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
