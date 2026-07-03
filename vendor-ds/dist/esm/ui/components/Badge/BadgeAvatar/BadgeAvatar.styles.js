import styled_components, { css } from "styled-components";
import { BadgeBase } from "../_shared/styles.js";
const AvatarBadgeElement = styled_components(BadgeBase)`
  border-radius: 50%;
  background-color: ${({ theme })=>theme.color.backgroundMagentaBold};
  color: ${({ theme })=>theme.color.textDefaultInverse};
  ${({ theme, $size })=>{
    if ('small' === $size) return css`
        width: 24px;
        height: 24px;
        ${theme.typography.uiElementLabelSmall};
      `;
    return css`
      width: 40px;
      height: 40px;
      ${theme.typography.uiElementStrong};
    `;
}};
`;
export { AvatarBadgeElement };
