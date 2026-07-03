import styled_components from "styled-components";
const DialogContent = styled_components.div`
  padding: ${(props)=>props.isNoPadding ? '0' : '0px 32px 32px 32px'};
  max-height: calc(100vh - 300px);
  overflow: auto;
  ${(props)=>props.theme.scrollbars.basic};
`;
export { DialogContent };
