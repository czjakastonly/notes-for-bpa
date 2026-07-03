import react from "react";
import { CounterBadgeElement } from "./BadgeCounter.styles.js";
const BadgeCounter = ({ variant = 'default', children })=>/*#__PURE__*/ react.createElement(CounterBadgeElement, {
        $variant: variant
    }, children);
export { BadgeCounter };
