import { STATIC_CLASS_NAME } from "../../constants.js";
const getIsElementTopDropdown = (floatingElement)=>{
    if (!floatingElement) return false;
    const portals = document.querySelectorAll(`body >.${STATIC_CLASS_NAME.portal}:not(:has( >.${STATIC_CLASS_NAME.tooltip}))`);
    if (portals.length) return portals[portals.length - 1].contains(floatingElement);
    return true;
};
export { getIsElementTopDropdown };
