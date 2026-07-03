import styled_components from "styled-components";
const Label = styled_components.div`
  ${({ theme })=>theme.typography.uiElementSmallStrong};
  color: ${({ theme })=>theme.color.textSubtle};
  margin-bottom: 8px;
`;
const Container = styled_components.div`
  margin: 0;
  padding: 0;
  &:has([aria-expanded='true']), // for dropdown buttons
  &:focus-within {
    ${Label} {
      color: ${({ theme })=>theme.color.textDefault};
    }
  }
`;
const FieldsWrap = styled_components.div`
  margin: 0;
  padding: 0;
`;
const RequiredLabelSuffix = styled_components.span.attrs({
    ariaHidden: true
})`
  color: ${({ theme })=>theme.color.iconPink};
  margin-left: 2px;
`;
const FieldGroup_styles = {
    Container,
    Label,
    FieldsWrap,
    RequiredLabelSuffix
};
export { FieldGroup_styles as default };
