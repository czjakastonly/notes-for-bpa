import styled_components from "styled-components";
import { resolveMessageColorForInputStatus } from "../_shared/helpers.js";
const InputStatusMessage = styled_components('span').withConfig({
    shouldForwardProp: (prop)=>![
            'status'
        ].includes(prop)
})`
  ${({ theme })=>theme.typography.uiElementSmallStrong};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  color: ${({ theme, status })=>resolveMessageColorForInputStatus(theme, status) || theme.color.textDark};
`;
export { InputStatusMessage };
