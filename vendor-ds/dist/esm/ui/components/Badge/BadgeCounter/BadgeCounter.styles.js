import styled_components, { css } from "styled-components";
import { BadgeBase } from "../_shared/styles.js";
const CounterBadgeElement = styled_components(BadgeBase)`
  padding: 0 4px;
  border-radius: 16px;
  min-width: 16px;
  ${({ theme })=>theme.typography.paragraphSmall};
  ${({ theme, $variant })=>{
    if ('important' === $variant) return css`
        background-color: ${theme.color.backgroundPrimary};
        color: ${theme.color.textDefaultInverse};
      `;
    return css`
      background-color: ${theme.color.backgroundGraySubtle};
      color: ${theme.color.textDefault};
    `;
}};
`;
export { CounterBadgeElement };
