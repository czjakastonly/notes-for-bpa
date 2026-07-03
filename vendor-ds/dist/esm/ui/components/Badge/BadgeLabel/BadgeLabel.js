import react from "react";
import { LabelBadgeElement } from "./BadgeLabel.styles.js";
const BadgeLabel = ({ variant = 'neutral', children })=>/*#__PURE__*/ react.createElement(LabelBadgeElement, {
        $variant: variant
    }, children);
export { BadgeLabel };
