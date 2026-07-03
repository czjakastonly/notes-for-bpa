import styled_components, { css } from "styled-components";
const IconWrap = styled_components.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
`;
const IconWrapLoader = styled_components(IconWrap)`
  position: absolute;
`;
const IconWrapLeft = styled_components(IconWrap)``;
const IconWrapRight = styled_components(IconWrap)``;
const IconWrapOnly = styled_components(IconWrap)``;
const TextWrap = styled_components.span`
  &::first-letter {
    text-transform: capitalize;
  }
`;
const focusButtonOutlineStyle = css`
  outline: 2px solid ${({ theme })=>theme.color.borderFocus};
`;
const colorStyleForVariantPrimary = css`
  background-color: ${({ theme })=>theme.color.backgroundPrimary};
  color: ${({ theme })=>theme.color.textDefaultInverse};
  border-color: ${({ theme })=>theme.color.backgroundPrimary};
  transition: opacity 0.3s, color 0.2s, background-color 0.2s, border-color 0.2s, outline-color 0.2s;

  & svg path {
    fill: ${({ theme })=>theme.color.iconDefaultInverse};
  }

  &:hover {
    background-color: ${({ theme })=>theme.color.backgroundPrimaryHover};
    border-color: ${({ theme })=>theme.color.backgroundPrimaryHover};
  }

  &:active {
    background-color: ${({ theme })=>theme.color.backgroundPrimaryPressed};
    border-color: ${({ theme })=>theme.color.backgroundPrimaryPressed};
    color: ${({ theme })=>theme.color.backgroundPinkSubtle};
    & svg path {
      fill: ${({ theme })=>theme.color.backgroundPinkSubtle};
    }
  }

  ${({ disabled, theme })=>disabled && css`
      opacity: 0.4;
      color: ${theme.color.textDefaultInverse};

      & svg path {
        fill: ${theme.color.textDefaultInverse};
      }
    `}

  ${({ disabled, isPressed, theme })=>!disabled && isPressed && css`
      background-color: ${theme.color.backgroundPrimaryHover};
      border-color: ${theme.color.backgroundPrimaryHover};
    `}
`;
const colorStyleForVariantOutline = css`
  background-color: ${(props)=>props.theme.color.backgroundDefault};
  color: ${(props)=>props.theme.color.textDefault};
  border-color: ${(props)=>props.theme.color.borderDefault};
  transition: opacity 0.3s, color 0.2s, background-color 0.2s, border-color 0.2s, outline-color 0.2s;

  & svg path {
    fill: ${({ theme, isIconOnly })=>isIconOnly ? theme.color.iconDefault : theme.color.iconDefaultWithText};
  }

  &:hover {
    background-color: ${({ theme })=>theme.color.backgroundDefaultTransparentHover};
    color: ${(props)=>props.theme.color.textHover};

    & svg path {
      fill: ${({ theme })=>theme.color.iconHover};
    }
  }

  &:active {
    background-color: ${({ theme })=>theme.color.backgroundDefaultTransparentPressed};
    color: ${(props)=>props.theme.color.textHover};

    & svg path {
      fill: ${({ theme })=>theme.color.iconHover};
    }
  }

  ${({ disabled, isLoading })=>disabled && !isLoading && css`
      opacity: 0.4;
    `}

  ${({ disabled, isLoading, theme })=>disabled && isLoading && css`
      background-color: ${theme.color.backgroundDefaultTransparentHover};
      border-color: ${theme.color.borderSubtle};
    `}

  ${({ disabled, isPressed, theme })=>!disabled && isPressed && css`
      background-color: ${theme.color.backgroundDefaultTransparentHover};
      color: ${theme.color.textHover};

      & svg path {
        fill: ${theme.color.iconHover};
      }
    `}
`;
const colorStyleForVariantMinimal = css`
  background-color: transparent;
  color: ${(props)=>props.theme.color.textDefault};
  border-color: transparent;

  & svg path {
    fill: ${({ theme, isIconOnly })=>isIconOnly ? theme.color.iconDefault : theme.color.iconDefaultWithText};
  }

  &:hover {
    background-color: ${({ theme })=>theme.color.backgroundDefaultTransparentHover};
    color: ${({ theme })=>theme.color.textHover};

    & svg path {
      fill: ${({ theme })=>theme.color.iconHover};
    }
  }

  &:active {
    background-color: ${({ theme })=>theme.color.backgroundDefaultTransparentPressed};
    color: ${({ theme })=>theme.color.textHover};

    & svg path {
      fill: ${({ theme })=>theme.color.iconHover};
    }
  }

  ${({ disabled, isLoading })=>disabled && !isLoading && css`
      opacity: 0.4;
    `}

  ${({ disabled, isLoading, theme })=>disabled && isLoading && css`
      background-color: ${theme.color.backgroundDefaultHover};
    `}

  ${({ disabled, isPressed, theme })=>!disabled && isPressed && css`
      background-color: ${theme.color.backgroundDefaultTransparentHover};
      color: ${theme.color.textHover};

      & svg path {
        fill: ${theme.color.iconHover};
      }
    `}
`;
const colorStyleForVariantLink = css`
  background-color: transparent;
  color: ${(props)=>props.theme.color.textLink};
  border-color: transparent;

  & svg path {
    fill: ${({ theme })=>theme.color.iconLinkDefault};
  }

  &:hover {
    background-color: transparent;
    color: ${(props)=>props.theme.color.textLinkHover};
    border-color: transparent;

    & svg path {
      fill: ${({ theme })=>theme.color.iconLinkHover};
    }
  }

  &:active {
    background-color: transparent;
    color: ${(props)=>props.theme.color.textLinkPressed};
    border-color: transparent;

    & svg path {
      fill: ${({ theme })=>theme.color.iconLinkPressed};
    }
  }

  ${({ disabled, isLoading })=>disabled && !isLoading && css`
      opacity: 0.4;
    `}

  ${({ disabled, isPressed, theme })=>!disabled && isPressed && css`
      background-color: transparent;
      border-color: transparent;
      color: ${theme.color.textLinkHover};

      & svg path {
        fill: ${theme.color.iconLinkHover};
      }
    `}
`;
const colorStyleForVariantDropzone = css`
  background-color: ${({ theme })=>theme.color.backgroundDefault};
  color: ${({ theme })=>theme.color.textDefault};
  border-color: ${({ theme })=>theme.color.borderDefault};

  & svg path {
    fill: ${({ theme, isIconOnly })=>isIconOnly ? theme.color.iconDefault : theme.color.iconDefaultWithText};
    transition: fill 0.2s;
  }

  &:hover {
    background-color: ${({ theme })=>theme.color.backgroundDefaultTransparentHover};
    color: ${({ theme })=>theme.color.textHover};
    border-color: ${({ theme })=>theme.color.borderDefaultHover};

    & svg path {
      fill: ${({ theme })=>theme.color.iconHover};
    }
  }

  &:active {
    background-color: ${({ theme })=>theme.color.backgroundDefaultTransparentPressed};
    color: ${({ theme })=>theme.color.textHover};

    & svg path {
      fill: ${({ theme })=>theme.color.iconHover};
    }
  }

  ${({ disabled, isLoading })=>disabled && !isLoading && css`
      opacity: 0.4;
    `}

  ${({ disabled, isLoading, theme })=>disabled && isLoading && css`
      background-color: ${theme.color.backgroundDefaultTransparentHover};
      border-color: ${theme.color.borderSubtle};
    `}

  ${({ disabled, isPressed, theme })=>!disabled && isPressed && css`
      background-color: ${theme.color.backgroundDefaultTransparentHover};
      color: ${theme.color.textHover};

      & svg path {
        fill: ${theme.color.iconHover};
      }
    `}
`;
const fontSizeStyleForSizeStandard = css`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
const fontSizeStyleForSizeSmall = css`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;
const dimensionStyleForButtonElementSizeSmall = css`
  box-sizing: border-box;
  border-radius: 18px;
  border-width: 1px;
  width: fit-content;
  height: 28px;
  padding: ${({ isIconOnly })=>isIconOnly ? '5px' : '5px 11px'};

  ${TextWrap} {
    padding: 0 4px;
  }
`;
const dimensionStyleForButtonElementSizeStandard = css`
  box-sizing: border-box;
  border-radius: 18px;
  border-width: 1px;
  width: fit-content;
  height: 36px;
  padding: ${({ isIconOnly })=>isIconOnly ? '9px' : '7px 15px'};

  ${TextWrap} {
    padding: 0 8px;
  }
`;
const dimensionStyleForMinimalButtonElementSizeSmall = css`
  box-sizing: border-box;
  border-radius: 18px;
  border-width: 1px;
  width: fit-content;
  height: 28px;
  padding: ${({ isIconOnly })=>isIconOnly ? '5px' : '5px 11px'};

  ${TextWrap} {
    padding: 0;
  }

  ${TextWrap}:has(+${IconWrapRight}) {
    padding-right: 4px;
  }

  ${IconWrapLeft}+${TextWrap} {
    padding-left: 4px;
  }
`;
const dimensionStyleForMinimalButtonElementSizeStandard = css`
  box-sizing: border-box;
  border-radius: 18px;
  border-width: 1px;
  width: fit-content;
  height: 36px;
  padding: ${({ isIconOnly })=>isIconOnly ? '9px' : '7px 15px'};

  ${TextWrap} {
    padding: 0;
  }

  ${TextWrap}:has(+${IconWrapRight}) {
    padding-right: 8px;
  }

  ${IconWrapLeft}+${TextWrap} {
    padding-left: 8px;
  }
`;
const dimensionStyleForLinkElementSizeSmall = css`
  box-sizing: border-box;
  border-radius: 2px;
  border-width: 1px;
  width: fit-content;
  height: 16px;
  margin: auto 0;
  padding: 0;

  ${TextWrap} {
    padding: 0;
  }

  ${TextWrap}:has(+${IconWrapRight}) {
    padding-right: 4px;
  }

  ${IconWrapLeft}+${TextWrap} {
    padding-left: 4px;
  }
`;
const dimensionStyleForLinkElementSizeStandard = css`
  box-sizing: border-box;
  border-radius: 2px;
  border-width: 1px;
  width: fit-content;
  height: 20px;
  margin: auto 0;
  padding: 0;

  ${TextWrap} {
    padding: 0;
  }

  ${TextWrap}:has(+${IconWrapRight}) {
    padding-right: 8px;
  }

  ${IconWrapLeft}+${TextWrap} {
    padding-left: 8px;
  }
`;
const dimensionStyleForDropzoneButtonElement = css`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border-width: 1px;
  border-style: dashed;
  border-radius: 4px;
  padding: ${({ isIconOnly })=>isIconOnly ? '0' : '0 12px'};
  justify-content: ${({ isIconOnly })=>isIconOnly ? 'center' : 'flex-start'};
  gap: 8px;

  ${IconWrap} {
    flex-shrink: 0;
  }
`;
const ButtonElement = styled_components.button`
  font-family: inherit;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  text-wrap: nowrap;
  user-select: none;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s, outline-color 0.2s;
  border-style: solid;

  &:focus-visible {
    ${focusButtonOutlineStyle}
  }

  ${({ disabled })=>disabled && css`
      pointer-events: none;
    `}

  ${({ isLoading })=>isLoading && css`
      min-width: 56px;
      ${IconWrap} {
        visibility: hidden;
      }
      ${IconWrapOnly} {
        width: 30px;
      }
      ${IconWrapLoader} {
        visibility: visible;
        position: absolute;
      }
      ${TextWrap} {
        visibility: hidden;
      }
    `}
`;
const PrimaryButtonElement = styled_components(ButtonElement)`
  ${colorStyleForVariantPrimary};
  position: relative;
  ${({ $size })=>'small' === $size ? css`
          ${fontSizeStyleForSizeSmall};
          ${dimensionStyleForButtonElementSizeSmall};
        ` : css`
          ${fontSizeStyleForSizeStandard};
          ${dimensionStyleForButtonElementSizeStandard};
        `}
`;
const OutlineButtonElement = styled_components(ButtonElement)`
  ${colorStyleForVariantOutline}
  ${({ $size })=>'small' === $size ? css`
          ${fontSizeStyleForSizeSmall};
          ${dimensionStyleForButtonElementSizeSmall};
        ` : css`
          ${fontSizeStyleForSizeStandard};
          ${dimensionStyleForButtonElementSizeStandard};
        `}
`;
const MinimalButtonElement = styled_components(ButtonElement)`
  ${colorStyleForVariantMinimal};
  ${({ $size })=>'small' === $size ? css`
          ${fontSizeStyleForSizeSmall};
          ${dimensionStyleForMinimalButtonElementSizeSmall};
        ` : css`
          ${fontSizeStyleForSizeStandard};
          ${dimensionStyleForMinimalButtonElementSizeStandard};
        `}
  ${({ isIconOnly })=>isIconOnly && css`
      border-radius: 4px;
    `}

  ${({ isIconOnly, $size })=>isIconOnly && 'standard' === $size && css`
      padding: 5px;
      ${IconWrap} {
        width: 24px;
        height: 24px;
      }
    `}
`;
const LinkButtonElement = styled_components(ButtonElement)`
  ${colorStyleForVariantLink};
  text-decoration-line: ${({ isPressed })=>isPressed ? 'underline' : 'unset'};

  &:hover,
  &:active {
    text-decoration-line: underline;
  }
  ${({ $size })=>'small' === $size ? css`
          ${({ theme })=>theme.typography.uiElementSmall};
          ${dimensionStyleForLinkElementSizeSmall};
        ` : css`
          ${({ theme })=>theme.typography.uiElement};
          ${dimensionStyleForLinkElementSizeStandard};
        `}
`;
const DropzoneButtonElement = styled_components(ButtonElement)`
  ${colorStyleForVariantDropzone};
  ${fontSizeStyleForSizeStandard};
  ${dimensionStyleForDropzoneButtonElement};
`;
const ButtonStyles = {
    DropzoneButtonElement,
    IconWrap,
    IconWrapLeft,
    IconWrapLoader,
    IconWrapOnly,
    IconWrapRight,
    LinkButtonElement,
    MinimalButtonElement,
    OutlineButtonElement,
    PrimaryButtonElement,
    TextWrap
};
export { ButtonStyles, focusButtonOutlineStyle };
