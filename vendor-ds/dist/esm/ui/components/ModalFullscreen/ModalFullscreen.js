import react from "react";
import { Portal } from "../../utils/Portal/index.js";
import { STATIC_CLASS_NAME } from "../../constants.js";
import { FocusLock } from "../../utils/FocusLock/index.js";
import reducedMotion from "../../utils/reducedMotion.js";
import { AnimatePresence, Body, Container } from "./ModalFullscreen.styles.js";
const ModalFullscreen = /*#__PURE__*/ react.forwardRef(({ children }, forwardedRef)=>{
    const reduceMotion = reducedMotion();
    return /*#__PURE__*/ react.createElement(AnimatePresence, null, !!children && /*#__PURE__*/ react.createElement(Portal, null, /*#__PURE__*/ react.createElement(FocusLock, null, /*#__PURE__*/ react.createElement(Container, null, /*#__PURE__*/ react.createElement(Body, {
        className: STATIC_CLASS_NAME.modalFullscreen,
        "aria-modal": "true",
        role: "dialog",
        ref: forwardedRef,
        initial: {
            opacity: 0,
            scale: reduceMotion ? 1 : 1.05,
            pointerEvents: 'none'
        },
        animate: {
            opacity: 1,
            scale: 1,
            pointerEvents: 'all'
        },
        exit: {
            opacity: 0,
            scale: reduceMotion ? 1 : 1.05,
            pointerEvents: 'none'
        },
        transition: {
            type: 'spring'
        }
    }, children)))));
});
export { ModalFullscreen };
