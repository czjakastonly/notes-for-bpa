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
    ModalPanel: ()=>ModalPanel
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const index_cjs_namespaceObject = require("../../utils/Portal/index.cjs");
const external_constants_cjs_namespaceObject = require("../../constants.cjs");
const FocusLock_index_cjs_namespaceObject = require("../../utils/FocusLock/index.cjs");
const external_ModalPanel_styles_cjs_namespaceObject = require("./ModalPanel.styles.cjs");
const external_ModalPanelCloseButton_cjs_namespaceObject = require("./ModalPanelCloseButton.cjs");
const ModalPanel = ({ children, onCloseClick, onBackdropClick, closePositionTop = '24px', closePositionRight = '24px' })=>{
    const isOpen = !!children;
    return /*#__PURE__*/ external_react_default().createElement(external_ModalPanel_styles_cjs_namespaceObject.AnimatePresence, null, isOpen && /*#__PURE__*/ external_react_default().createElement(index_cjs_namespaceObject.Portal, null, /*#__PURE__*/ external_react_default().createElement(FocusLock_index_cjs_namespaceObject.FocusLock, null, /*#__PURE__*/ external_react_default().createElement(external_ModalPanel_styles_cjs_namespaceObject.Container, null, /*#__PURE__*/ external_react_default().createElement(external_ModalPanel_styles_cjs_namespaceObject.Backdrop, {
        className: external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.modalBackdrop,
        onClick: onBackdropClick
    }), /*#__PURE__*/ external_react_default().createElement(external_ModalPanel_styles_cjs_namespaceObject.Body, {
        className: external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.modal,
        "aria-modal": "true"
    }, 'function' == typeof onCloseClick && /*#__PURE__*/ external_react_default().createElement(external_ModalPanelCloseButton_cjs_namespaceObject.ModalPanelCloseButton, {
        className: external_constants_cjs_namespaceObject.STATIC_CLASS_NAME.modalClose,
        onClick: onCloseClick,
        top: closePositionTop,
        right: closePositionRight,
        "aria-label": "close",
        tabIndex: 0
    }), children)))));
};
exports.ModalPanel = __webpack_exports__.ModalPanel;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ModalPanel"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
