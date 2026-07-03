import react from "react";
import { Portal } from "../../utils/Portal/index.js";
import { STATIC_CLASS_NAME } from "../../constants.js";
import { FocusLock } from "../../utils/FocusLock/index.js";
import { AnimatePresence, Backdrop, Body, Container } from "./ModalPanel.styles.js";
import { ModalPanelCloseButton } from "./ModalPanelCloseButton.js";
const ModalPanel = ({ children, onCloseClick, onBackdropClick, closePositionTop = '24px', closePositionRight = '24px' })=>{
    const isOpen = !!children;
    return /*#__PURE__*/ react.createElement(AnimatePresence, null, isOpen && /*#__PURE__*/ react.createElement(Portal, null, /*#__PURE__*/ react.createElement(FocusLock, null, /*#__PURE__*/ react.createElement(Container, null, /*#__PURE__*/ react.createElement(Backdrop, {
        className: STATIC_CLASS_NAME.modalBackdrop,
        onClick: onBackdropClick
    }), /*#__PURE__*/ react.createElement(Body, {
        className: STATIC_CLASS_NAME.modal,
        "aria-modal": "true"
    }, 'function' == typeof onCloseClick && /*#__PURE__*/ react.createElement(ModalPanelCloseButton, {
        className: STATIC_CLASS_NAME.modalClose,
        onClick: onCloseClick,
        top: closePositionTop,
        right: closePositionRight,
        "aria-label": "close",
        tabIndex: 0
    }), children)))));
};
export { ModalPanel };
