import styled_components from "styled-components";
const DialogContent = styled_components.div`
  max-height: calc(100vh - 300px);
  overflow: auto;
  ${(props)=>props.theme.scrollbars.basic};
`;
export { DialogContent };
