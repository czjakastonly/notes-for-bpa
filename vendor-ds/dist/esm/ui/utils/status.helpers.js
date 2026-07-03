import react from "react";
import Tick_16 from "../atoms/icons/Tick-16.js";
import Tip_16 from "../atoms/icons/Tip-16.js";
import Warning_16 from "../atoms/icons/Warning-16.js";
import Error_16 from "../atoms/icons/Error-16.js";
import Tick_24 from "../atoms/icons/Tick-24.js";
import Tip_24 from "../atoms/icons/Tip-24.js";
import Warning_24 from "../atoms/icons/Warning-24.js";
import Error_24 from "../atoms/icons/Error-24.js";
import { STATIC_CLASS_NAME } from "../constants.js";
const STATUS_ICON_CLASS_NAME = 'ston-status-icon';
const resolveMainColorForStatus = (theme, status)=>{
    if ('error' === status) return theme.color.backgroundDanger;
    if ('success' === status) return theme.color.backgroundGreenDefault;
    if ('warning' === status) return theme.color.backgroundYellowDefault;
    if ('info' === status) return theme.color.backgroundBlueDefault;
};
const resolveBackColorForStatus = (theme, status)=>{
    if ('error' === status) return theme.color.backgroundDangerSubtle;
    if ('success' === status) return theme.color.backgroundGreenSubtlest;
    if ('warning' === status) return theme.color.backgroundWarningSubtle;
    if ('info' === status) return theme.color.backgroundBlueSubtlest;
};
const renderStatusIconForStatus = (status, iconSizeName)=>{
    if ('error' === status) {
        const Error = '24' === iconSizeName ? Error_24 : Error_16;
        return /*#__PURE__*/ react.createElement(Error, {
            "data-status": status,
            className: STATIC_CLASS_NAME.statusIcon
        });
    }
    if ('warning' === status) {
        const Warning = '24' === iconSizeName ? Warning_24 : Warning_16;
        return /*#__PURE__*/ react.createElement(Warning, {
            "data-status": status,
            className: STATIC_CLASS_NAME.statusIcon
        });
    }
    if ('success' === status) {
        const Tick = '24' === iconSizeName ? Tick_24 : Tick_16;
        return /*#__PURE__*/ react.createElement(Tick, {
            "data-status": status,
            className: STATIC_CLASS_NAME.statusIcon
        });
    }
    if ('info' === status) {
        const Tip = '24' === iconSizeName ? Tip_24 : Tip_16;
        return /*#__PURE__*/ react.createElement(Tip, {
            "data-status": status,
            className: STATIC_CLASS_NAME.statusIcon
        });
    }
    return null;
};
export { STATUS_ICON_CLASS_NAME, renderStatusIconForStatus, resolveBackColorForStatus, resolveMainColorForStatus };
