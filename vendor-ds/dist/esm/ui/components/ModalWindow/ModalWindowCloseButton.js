import react from "react";
import styled_components from "styled-components";
import Cross_16 from "../../atoms/icons/Cross-16.js";
const CloseIcon = styled_components(Cross_16)`
  display: block;
  margin: auto;
  path {
    fill: ${(props)=>props.theme.color.iconDefaultInverse};
  }
`;
const CloseButton = styled_components.button`
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 1;
  top: ${(props)=>props.top};
  right: ${(props)=>props.right};
  display: flex;
  background-color: ${(props)=>props.theme.color.backgroundGrayDefault};
  border-radius: 50%;
  border-color: transparent;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  outline: 0;
  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.color.borderFocus};
    outline-offset: 2px;
  }

  &:hover {
    background-color: ${(props)=>props.theme.color.backgroundGrayBold};
  }
`;
const ModalWindowCloseButton = (props)=>/*#__PURE__*/ react.createElement(CloseButton, props, /*#__PURE__*/ react.createElement(CloseIcon, null));
export { ModalWindowCloseButton };
