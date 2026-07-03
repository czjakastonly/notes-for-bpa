import { renderStatusIconForStatus } from "../../../utils/status.helpers.js";
const resolveIconColorForInputStatus = (theme, status)=>{
    if ('error' === status) return theme.color.iconDanger;
    if ('success' === status) return theme.color.iconSuccess;
    if ('warning' === status) return theme.color.iconWarning;
};
const resolveMessageColorForInputStatus = (theme, status)=>{
    if ('error' === status) return theme.color.textDanger;
    if ('success' === status) return theme.color.textSuccess;
    if ('warning' === status) return theme.color.textWarning;
    if ('info' === status) return theme.color.textSubtle;
};
const resolveBorderColorForInputStatus = (theme, status)=>{
    if ('error' === status) return theme.color.borderDanger;
    if ('success' === status) return theme.color.borderSuccess;
    if ('warning' === status) return theme.color.textWarning;
};
const renderStatusIconForInputStatus = (status, iconSizeName)=>{
    if ('success' === status) return renderStatusIconForStatus(status, iconSizeName);
    return null;
};
const renderMessageStatusIconForInputStatus = (status, iconSizeName)=>{
    if ('success' === status) return null;
    if ('info' === status) return null;
    return renderStatusIconForStatus(status, iconSizeName);
};
export { renderMessageStatusIconForInputStatus, renderStatusIconForInputStatus, resolveBorderColorForInputStatus, resolveIconColorForInputStatus, resolveMessageColorForInputStatus };
