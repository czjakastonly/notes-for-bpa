import react from "react";
import { AvatarBadgeElement } from "./BadgeAvatar.styles.js";
const BadgeAvatar = ({ size = 'small', children })=>/*#__PURE__*/ react.createElement(AvatarBadgeElement, {
        $size: size
    }, children);
export { BadgeAvatar };
