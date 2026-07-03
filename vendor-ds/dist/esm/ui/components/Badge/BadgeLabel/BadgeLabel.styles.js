import styled_components, { css } from "styled-components";
import { BadgeBase } from "../_shared/styles.js";
const LabelBadgeElement = styled_components(BadgeBase)`
  padding: 0 4px;
  border-radius: 4px;
  ${({ theme })=>theme.typography.paragraphSmall};
  ${({ theme, $variant })=>{
    if ('success' === $variant) return css`
        background-color: ${theme.color.backgroundGreenSubtle};
        color: ${theme.color.textSuccess};
      `;
    if ('danger' === $variant) return css`
        background-color: ${theme.color.backgroundDangerSubtle};
        color: ${theme.color.textDanger};
      `;
    if ('info-dark' === $variant) return css`
        background-color: ${theme.color.backgroundBlueBold};
        color: ${theme.color.textDefaultInverse};
      `;
    if ('info-light' === $variant) return css`
        background-color: ${theme.color.backgroundBlueSubtle};
        color: ${theme.color.textInformationDark};
      `;
    return css`
      background-color: ${theme.color.backgroundDefaultHover};
      color: ${theme.color.textSubtle};
    `;
}};
`;
export { LabelBadgeElement };
