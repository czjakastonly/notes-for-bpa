import react from "react";
import { STATIC_CLASS_NAME } from "../../../../constants.js";
import { mergeClassNames } from "../../../../utils/mergeClassNames.js";
import { TooltipIcon } from "../../../Tooltip/TooltipIcon.js";
import Help_16 from "../../../../atoms/icons/Help-16.js";
import { renderMessageStatusIconForInputStatus, resolveIconColorForInputStatus, resolveMessageColorForInputStatus } from "../../_shared/helpers.js";
import { useTheme } from "styled-components";
import InputWrap_styles from "./InputWrap.styles.js";
const InputWrap = ({ labelDomId, messageDomId, required, children, status, message, label, className, tooltip })=>{
    const theme = useTheme();
    const statusIcon = renderMessageStatusIconForInputStatus(status);
    const statusIconColor = resolveIconColorForInputStatus(theme, status);
    const statusMessageColor = resolveMessageColorForInputStatus(theme, status);
    return /*#__PURE__*/ react.createElement(InputWrap_styles.InputContainer, {
        className: mergeClassNames(className, STATIC_CLASS_NAME.inputWrap),
        withMessageBelow: !!message
    }, label && /*#__PURE__*/ react.createElement(InputWrap_styles.InputLabel, null, /*#__PURE__*/ react.createElement("span", {
        id: labelDomId,
        className: STATIC_CLASS_NAME.inputLabel
    }, label), required && label && /*#__PURE__*/ react.createElement(InputWrap_styles.InputRequiredLabelSuffix, {
        "aria-hidden": true
    }, "*"), tooltip && /*#__PURE__*/ react.createElement(TooltipIcon, {
        as: Help_16
    }, tooltip)), children, message && /*#__PURE__*/ react.createElement(InputWrap_styles.InputMessageWrap, {
        className: STATIC_CLASS_NAME.inputMessage,
        id: messageDomId,
        $textColor: statusMessageColor,
        "aria-live": "polite",
        "data-status": status
    }, statusIcon && /*#__PURE__*/ react.createElement(InputWrap_styles.InputMessageIconWrap, {
        "aria-hidden": true,
        $color: statusIconColor
    }, statusIcon), message));
};
export { InputWrap };
