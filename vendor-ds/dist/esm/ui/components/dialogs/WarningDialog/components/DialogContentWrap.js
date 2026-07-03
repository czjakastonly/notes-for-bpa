import styled_components, { css } from "styled-components";
const DialogContentWrap = styled_components.div`
  padding: 0px 32px 40px 32px;
  ${(props)=>props.theme.typography.paragraph1};
  text-align: center;
  max-height: calc(100vh - 300px);
  max-width: 90vw;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  ${({ isLoading })=>isLoading && css`
      max-height: 120px;
    `}
`;
export { DialogContentWrap };
