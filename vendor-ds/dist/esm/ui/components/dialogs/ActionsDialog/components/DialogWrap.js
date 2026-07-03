import styled_components, { css } from "styled-components";
const DialogWrap = styled_components.div`
  position: relative;
  max-width: 100vw;
  overflow: auto;
  ${({ size })=>{
    if ('extraLarge' === size) return css`
        width: 960px;
      `;
    if ('large' === size) return css`
        width: 800px;
      `;
    if ('small' === size) return css`
        width: 480px;
      `;
    return css`
      width: 640px;
    `;
}};
`;
export { DialogWrap };
