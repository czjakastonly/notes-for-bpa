"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.n = (module)=>{
        var getter = module && module.__esModule ? ()=>module['default'] : ()=>module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ("u" > typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    ButtonStyles: ()=>ButtonStyles,
    focusButtonOutlineStyle: ()=>focusButtonOutlineStyle
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const IconWrap = external_styled_components_default().span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
`;
const IconWrapLoader = external_styled_components_default()(IconWrap)`
  position: absolute;
`;
const IconWrapLeft = external_styled_components_default()(IconWrap)``;
const IconWrapRight = external_styled_components_default()(IconWrap)``;
const IconWrapOnly = external_styled_components_default()(IconWrap)``;
const TextWrap = external_styled_components_default().span`
  &::first-letter {
    text-transform: capitalize;
  }
`;
const focusButtonOutlineStyle = (0, external_styled_components_namespaceObject.css)`
  outline: 2px solid ${({ theme })=>theme.color.borderFocus};
`;
const colorStyleForVariantPrimary = (0, external_styled_components_namespaceObject.css)`
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

  ${({ disabled, theme })=>disabled && (0, external_styled_components_namespaceObject.css)`
      opacity: 0.4;
      color: ${theme.color.textDefaultInverse};

      & svg path {
        fill: ${theme.color.textDefaultInverse};
      }
    `}

  ${({ disabled, isPressed, theme })=>!disabled && isPressed && (0, external_styled_components_namespaceObject.css)`
      background-color: ${theme.color.backgroundPrimaryHover};
      border-color: ${theme.color.backgroundPrimaryHover};
    `}
`;
const colorStyleForVariantOutline = (0, external_styled_components_namespaceObject.css)`
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

  ${({ disabled, isLoading })=>disabled && !isLoading && (0, external_styled_components_namespaceObject.css)`
      opacity: 0.4;
    `}

  ${({ disabled, isLoading, theme })=>disabled && isLoading && (0, external_styled_components_namespaceObject.css)`
      background-color: ${theme.color.backgroundDefaultTransparentHover};
      border-color: ${theme.color.borderSubtle};
    `}

  ${({ disabled, isPressed, theme })=>!disabled && isPressed && (0, external_styled_components_namespaceObject.css)`
      background-color: ${theme.color.backgroundDefaultTransparentHover};
      color: ${theme.color.textHover};

      & svg path {
        fill: ${theme.color.iconHover};
      }
    `}
`;
const colorStyleForVariantMinimal = (0, external_styled_components_namespaceObject.css)`
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

  ${({ disabled, isLoading })=>disabled && !isLoading && (0, external_styled_components_namespaceObject.css)`
      opacity: 0.4;
    `}

  ${({ disabled, isLoading, theme })=>disabled && isLoading && (0, external_styled_components_namespaceObject.css)`
      background-color: ${theme.color.backgroundDefaultHover};
    `}

  ${({ disabled, isPressed, theme })=>!disabled && isPressed && (0, external_styled_components_namespaceObject.css)`
      background-color: ${theme.color.backgroundDefaultTransparentHover};
      color: ${theme.color.textHover};

      & svg path {
        fill: ${theme.color.iconHover};
      }
    `}
`;
const colorStyleForVariantLink = (0, external_styled_components_namespaceObject.css)`
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

  ${({ disabled, isLoading })=>disabled && !isLoading && (0, external_styled_components_namespaceObject.css)`
      opacity: 0.4;
    `}

  ${({ disabled, isPressed, theme })=>!disabled && isPressed && (0, external_styled_components_namespaceObject.css)`
      background-color: transparent;
      border-color: transparent;
      color: ${theme.color.textLinkHover};

      & svg path {
        fill: ${theme.color.iconLinkHover};
      }
    `}
`;
const colorStyleForVariantDropzone = (0, external_styled_components_namespaceObject.css)`
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

  ${({ disabled, isLoading })=>disabled && !isLoading && (0, external_styled_components_namespaceObject.css)`
      opacity: 0.4;
    `}

  ${({ disabled, isLoading, theme })=>disabled && isLoading && (0, external_styled_components_namespaceObject.css)`
      background-color: ${theme.color.backgroundDefaultTransparentHover};
      border-color: ${theme.color.borderSubtle};
    `}

  ${({ disabled, isPressed, theme })=>!disabled && isPressed && (0, external_styled_components_namespaceObject.css)`
      background-color: ${theme.color.backgroundDefaultTransparentHover};
      color: ${theme.color.textHover};

      & svg path {
        fill: ${theme.color.iconHover};
      }
    `}
`;
const fontSizeStyleForSizeStandard = (0, external_styled_components_namespaceObject.css)`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
const fontSizeStyleForSizeSmall = (0, external_styled_components_namespaceObject.css)`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;
const dimensionStyleForButtonElementSizeSmall = (0, external_styled_components_namespaceObject.css)`
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
const dimensionStyleForButtonElementSizeStandard = (0, external_styled_components_namespaceObject.css)`
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
const dimensionStyleForMinimalButtonElementSizeSmall = (0, external_styled_components_namespaceObject.css)`
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
const dimensionStyleForMinimalButtonElementSizeStandard = (0, external_styled_components_namespaceObject.css)`
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
const dimensionStyleForLinkElementSizeSmall = (0, external_styled_components_namespaceObject.css)`
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
const dimensionStyleForLinkElementSizeStandard = (0, external_styled_components_namespaceObject.css)`
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
const dimensionStyleForDropzoneButtonElement = (0, external_styled_components_namespaceObject.css)`
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
const ButtonElement = external_styled_components_default().button`
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

  ${({ disabled })=>disabled && (0, external_styled_components_namespaceObject.css)`
      pointer-events: none;
    `}

  ${({ isLoading })=>isLoading && (0, external_styled_components_namespaceObject.css)`
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
const PrimaryButtonElement = external_styled_components_default()(ButtonElement)`
  ${colorStyleForVariantPrimary};
  position: relative;
  ${({ $size })=>'small' === $size ? (0, external_styled_components_namespaceObject.css)`
          ${fontSizeStyleForSizeSmall};
          ${dimensionStyleForButtonElementSizeSmall};
        ` : (0, external_styled_components_namespaceObject.css)`
          ${fontSizeStyleForSizeStandard};
          ${dimensionStyleForButtonElementSizeStandard};
        `}
`;
const OutlineButtonElement = external_styled_components_default()(ButtonElement)`
  ${colorStyleForVariantOutline}
  ${({ $size })=>'small' === $size ? (0, external_styled_components_namespaceObject.css)`
          ${fontSizeStyleForSizeSmall};
          ${dimensionStyleForButtonElementSizeSmall};
        ` : (0, external_styled_components_namespaceObject.css)`
          ${fontSizeStyleForSizeStandard};
          ${dimensionStyleForButtonElementSizeStandard};
        `}
`;
const MinimalButtonElement = external_styled_components_default()(ButtonElement)`
  ${colorStyleForVariantMinimal};
  ${({ $size })=>'small' === $size ? (0, external_styled_components_namespaceObject.css)`
          ${fontSizeStyleForSizeSmall};
          ${dimensionStyleForMinimalButtonElementSizeSmall};
        ` : (0, external_styled_components_namespaceObject.css)`
          ${fontSizeStyleForSizeStandard};
          ${dimensionStyleForMinimalButtonElementSizeStandard};
        `}
  ${({ isIconOnly })=>isIconOnly && (0, external_styled_components_namespaceObject.css)`
      border-radius: 4px;
    `}

  ${({ isIconOnly, $size })=>isIconOnly && 'standard' === $size && (0, external_styled_components_namespaceObject.css)`
      padding: 5px;
      ${IconWrap} {
        width: 24px;
        height: 24px;
      }
    `}
`;
const LinkButtonElement = external_styled_components_default()(ButtonElement)`
  ${colorStyleForVariantLink};
  text-decoration-line: ${({ isPressed })=>isPressed ? 'underline' : 'unset'};

  &:hover,
  &:active {
    text-decoration-line: underline;
  }
  ${({ $size })=>'small' === $size ? (0, external_styled_components_namespaceObject.css)`
          ${({ theme })=>theme.typography.uiElementSmall};
          ${dimensionStyleForLinkElementSizeSmall};
        ` : (0, external_styled_components_namespaceObject.css)`
          ${({ theme })=>theme.typography.uiElement};
          ${dimensionStyleForLinkElementSizeStandard};
        `}
`;
const DropzoneButtonElement = external_styled_components_default()(ButtonElement)`
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
exports.ButtonStyles = __webpack_exports__.ButtonStyles;
exports.focusButtonOutlineStyle = __webpack_exports__.focusButtonOutlineStyle;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ButtonStyles",
    "focusButtonOutlineStyle"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
