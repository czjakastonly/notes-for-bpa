import styled_components, { css } from "styled-components";
import { focusButtonOutlineStyle } from "../_shared/styles.js";
const IconWrap = styled_components.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ size })=>'standard' === size ? '10px' : '6px'};
  border-radius: 50%;
  background-color: ${({ theme })=>theme.color.backgroundDefault};
  border: 1px solid ${({ theme })=>theme.color.borderDefault};
  transition: background-color 0.2s, border-color 0.2s;
  svg path {
    transition: fill 0.2s;
  }
`;
const ButtonElement = styled_components.button`
  font-family: inherit;
  border-style: none;
  border-radius: 16px;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  transition: color 0.2s;
  background: none;
  width: fit-content;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props)=>props.theme.color.textDefault};
  cursor: pointer;
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: outline-color 0.2s;

  &:focus-visible {
    ${focusButtonOutlineStyle}
  }

  ${({ size })=>{
    if ('standard' === size) return css`
        font-size: 16px;
        gap: 16px;
      `;
    if ('small' === size) return css`
        font-size: 14px;
        gap: 12px;
      `;
}}

  ${({ disabled })=>disabled && css`
      pointer-events: none;
      opacity: 0.4;
    `}


  &:hover {
    color: ${({ theme })=>theme.color.textHover};
    ${IconWrap} {
      background-color: ${({ theme })=>theme.color.backgroundGreenDefault};
      border-color: ${({ theme })=>theme.color.backgroundGreenDefault};
      svg path {
        fill: ${({ theme })=>theme.color.iconDefaultInverse};
      }
    }
  }

  &:active {
    color: ${({ theme })=>theme.color.textHover};
    ${IconWrap} {
      background-color: ${({ theme })=>theme.color.backgroundGreenBold};
      border-color: ${({ theme })=>theme.color.backgroundGreenBold};
      svg path {
        fill: ${({ theme })=>theme.color.iconDefaultInverse};
      }
    }
  }

  ${({ isPressed, disabled, theme })=>isPressed && !disabled && css`
      color: ${theme.color.textHover};
      ${IconWrap} {
        background-color: ${theme.color.backgroundGreenDefault};
        border-color: ${theme.color.backgroundGreenDefault};
        svg path {
          fill: ${theme.color.iconDefaultInverse};
        }
      }
    `}
`;
const Text = styled_components.span`
  display: block;
  transition: color 0.2s;
  background: none;
  padding: 0;
  color: inherit;
  cursor: pointer;

  &::first-letter {
    text-transform: capitalize;
  }
`;
export { ButtonElement, IconWrap, Text };
