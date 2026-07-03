import react from "react";
import { Dot, DotsWrap } from "./Loader.styles.js";
const Loader = ({ isDark })=>/*#__PURE__*/ react.createElement(DotsWrap, {
        isDark: isDark
    }, /*#__PURE__*/ react.createElement(Dot, null), /*#__PURE__*/ react.createElement(Dot, null), /*#__PURE__*/ react.createElement(Dot, null));
export { Loader };
