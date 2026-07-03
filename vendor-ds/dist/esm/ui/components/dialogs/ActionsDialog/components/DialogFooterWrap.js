import { STATIC_CLASS_NAME } from "../../../../constants.js";
import styled_components from "styled-components";
const DialogFooterWrap = styled_components.div`
  display: flex;
  padding: 24px 32px;
  border-top: 1px solid ${(props)=>props.theme.color.borderSubtle};
  align-items: center;
  .${STATIC_CLASS_NAME.buttonMinimal} {
    margin-left: -16px;
  }
`;
export { DialogFooterWrap };
