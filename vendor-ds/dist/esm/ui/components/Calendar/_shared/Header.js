import react from "react";
import ChevronRight_16 from "../../../atoms/icons/ChevronRight-16.js";
import ChevronLeft_16 from "../../../atoms/icons/ChevronLeft-16.js";
import { ButtonMinimal } from "../../buttons/ButtonMinimal/index.js";
import { CalendarStyles } from "./styles.js";
const Header = ({ children, onPrevClick, onNextClick, onTextClick, calendarNavigationLabel = 'Calendar navigation', previousLabel = 'Previous', nextLabel = 'Next' })=>/*#__PURE__*/ react.createElement(CalendarStyles.HeaderWrapper, {
        role: "group",
        "aria-label": calendarNavigationLabel
    }, /*#__PURE__*/ react.createElement(ButtonMinimal, {
        size: "small",
        iconOnly: /*#__PURE__*/ react.createElement(ChevronLeft_16, null),
        onClick: onPrevClick,
        "aria-label": previousLabel
    }), 'function' == typeof onTextClick ? /*#__PURE__*/ react.createElement(ButtonMinimal, {
        onClick: onTextClick,
        "aria-label": nextLabel
    }, children) : /*#__PURE__*/ react.createElement(CalendarStyles.HeaderText, {
        "aria-live": "polite",
        "aria-atomic": "true"
    }, children), /*#__PURE__*/ react.createElement(ButtonMinimal, {
        size: "small",
        iconOnly: /*#__PURE__*/ react.createElement(ChevronRight_16, null),
        onClick: onNextClick,
        "aria-label": nextLabel
    }));
export { Header };
