import react from "react";
import { renderStatusIconForStatus, resolveMainColorForStatus } from "../../utils/status.helpers.js";
import { useTheme } from "styled-components";
import { BaseToast } from "./BaseToast.styles.js";
import { BaseNotification } from "./BaseNotification.styles.js";
const Toast = ({ className, children, dataCy, severity = 'info', onCloseClick, onActionClick })=>{
    const theme = useTheme();
    return /*#__PURE__*/ react.createElement(BaseToast.Container, {
        className: className,
        $statusColor: resolveMainColorForStatus(theme, severity)
    }, /*#__PURE__*/ react.createElement(BaseToast.IconContainer, null, renderStatusIconForStatus(severity)), /*#__PURE__*/ react.createElement(BaseToast.Content, {
        "data-cy": dataCy
    }, children), onActionClick && /*#__PURE__*/ react.createElement(BaseToast.ActionButton, {
        onClick: onActionClick
    }, "action"), onCloseClick && /*#__PURE__*/ react.createElement(BaseNotification.CloseIconContainer, null, /*#__PURE__*/ react.createElement(BaseToast.StyledCloseSVG, {
        onClick: onCloseClick
    })));
};
export { Toast };
