import styled_components from "styled-components";
const DialogSectionHeading = styled_components.div`
  ${(props)=>props.theme.typography.uiElementLabel};
  color: ${(props)=>props.theme.color.textPlaceholder};
`;
export { DialogSectionHeading };
