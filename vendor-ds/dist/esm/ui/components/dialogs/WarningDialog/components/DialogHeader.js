import react from "react";
import styled_components from "styled-components";
import { renderStatusIconForStatus, resolveMainColorForStatus } from "../../../../utils/status.helpers.js";
const Container = styled_components.div`
  padding: 40px 32px 16px 32px;
  text-align: center;
`;
const IconContainer = styled_components.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${({ theme, severity })=>resolveMainColorForStatus(theme, severity)}1A;
  margin: 0 auto;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    path {
      fill: ${({ theme, severity })=>resolveMainColorForStatus(theme, severity)};
    }
  }
`;
const TitleText = styled_components.h2`
  ${(props)=>props.theme.typography.h2};
  display: block;
  align-items: center;
  color: ${(props)=>props.theme.color.textDark};
  margin-bottom: 0;
  margin-top: 0;
`;
const DialogHeader = ({ children, icon, severity, titleId })=>/*#__PURE__*/ react.createElement(Container, null, /*#__PURE__*/ react.createElement(IconContainer, {
        "aria-hidden": true,
        severity: severity
    }, icon || renderStatusIconForStatus(severity, '24')), /*#__PURE__*/ react.createElement(TitleText, {
        "data-cy": "dialogTitle",
        id: titleId
    }, children));
export { DialogHeader };
