import { color } from "./atoms/colors.js";
import { typography } from "./atoms/typography.js";
import { shadows } from "./atoms/shadows.js";
import { scrollbars } from "./atoms/scrollbars.js";
import { zIndex } from "./atoms/zIndex.js";
const theme = {
    color: color,
    typography: typography,
    shadows: shadows,
    scrollbars: scrollbars,
    zIndex: zIndex
};
const ui_theme = theme;
export { ui_theme as default, theme };
