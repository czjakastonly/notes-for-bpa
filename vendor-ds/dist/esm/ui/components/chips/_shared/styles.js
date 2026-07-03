import styled_components, { css } from "styled-components";
function resolveBackground($background, $borderColor, fallback) {
    if ($background) return $background;
    if ($borderColor) return `color-mix(in srgb, ${$borderColor} 12%, white)`;
    return fallback || 'transparent';
}
const ChipElement = styled_components.span`
  ${({ theme })=>theme.typography.uiElementStrong};
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${({ theme })=>theme.color.textSubtle};
  background: ${({ $background, $borderColor, theme })=>resolveBackground($background, $borderColor, theme.color.backgroundGraySubtlest)};
  border: 1px solid
    ${({ $borderColor })=>$borderColor ? `oklch(from ${$borderColor} min(l, 0.9) c h)` : 'transparent'};
  word-break: break-word;
`;
const ChipTruncatableElement = styled_components(ChipElement)`
  display: inline-block;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ $maxWidth })=>null != $maxWidth && css`
      max-width: ${'number' == typeof $maxWidth ? `${$maxWidth}px` : $maxWidth};
    `}
`;
export { ChipElement, ChipTruncatableElement };
