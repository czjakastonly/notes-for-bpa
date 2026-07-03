import react from "react";
import { Portal } from "../../utils/Portal/index.js";
import { STATIC_CLASS_NAME } from "../../constants.js";
import { FocusLock } from "../../utils/FocusLock/index.js";
import { AnimatePresence, Backdrop, Body, Container } from "./ModalWindow.styles.js";
import { ModalWindowCloseButton } from "./ModalWindowCloseButton.js";
const ModalWindow = ({ children, onCloseClick, onBackdropClick, closePositionTop = '38px', closePositionRight = '32px' })=>{
    if ('function' == typeof onCloseClick) console.warn('STON: ModalWindow.onCloseClick should be migrated to Dialog closeAction prop');
    return /*#__PURE__*/ react.createElement(AnimatePresence, null, !!children && /*#__PURE__*/ react.createElement(Portal, null, /*#__PURE__*/ react.createElement(FocusLock, null, /*#__PURE__*/ react.createElement(Container, {
        className: STATIC_CLASS_NAME.modalContainer
    }, /*#__PURE__*/ react.createElement(Backdrop, {
        className: STATIC_CLASS_NAME.modalBackdrop,
        onClick: onBackdropClick
    }), /*#__PURE__*/ react.createElement(Body, {
        className: STATIC_CLASS_NAME.modal,
        "aria-modal": "true"
    }, 'function' == typeof onCloseClick && /*#__PURE__*/ react.createElement(ModalWindowCloseButton, {
        onClick: onCloseClick,
        top: closePositionTop,
        right: closePositionRight,
        tabIndex: 0,
        "aria-label": "close"
    }), children)))));
};
export { ModalWindow };
