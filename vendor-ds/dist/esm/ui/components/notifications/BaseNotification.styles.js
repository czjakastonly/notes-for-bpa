import styled_components, { css } from "styled-components";
import Cross_16 from "../../atoms/icons/Cross-16.js";
const IconContainer = styled_components.div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`;
const CloseIconContainer = styled_components(IconContainer)`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-left: auto;
`;
const linkStyle = css`
  color: ${({ theme })=>theme.color.textLink};
  text-decoration: none;
  transition: color 0.2s, text-decoration 0.2s;

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: ${({ theme })=>theme.color.textLinkPressed};
    text-decoration: underline;
  }
`;
const Content = styled_components.div`
  ${(props)=>props.theme.typography.paragraph1};
  color: ${(props)=>props.theme.color.textDark};

  a {
    ${linkStyle}
  }
`;
const ContentSmall = styled_components.div`
  ${(props)=>props.theme.typography.paragraph2};
  color: ${(props)=>props.theme.color.textDark};

  a {
    ${linkStyle}
  }
`;
const StatusIconContainer = styled_components.div`
  flex-shrink: 0;
  path {
    fill: ${({ $statusColor })=>$statusColor};
  }
`;
const Container = styled_components.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  border-radius: 4px;
  background: ${(props)=>props.$statusColor};
  ${StatusIconContainer} {
    margin-top: 4px;
  }

  ${CloseIconContainer} {
    margin-top: 4px;
  }
`;
const ContainerSmall = styled_components(Container)`
  padding: 12px;
  padding-left: 16px;

  ${StatusIconContainer} {
    margin-top: 2px;
  }

  ${CloseIconContainer} {
    margin-top: 2px;
  }
`;
const StyledCloseSVG = styled_components(Cross_16)`
  cursor: pointer;
  path {
    fill: ${({ theme })=>theme.color.iconDefault};
    transition: fill 0.2s;
  }
  &:hover {
    path {
      fill: ${({ theme })=>theme.color.iconSubtle};
    }
  }
`;
const BaseNotification = {
    Container,
    ContainerSmall,
    IconContainer,
    CloseIconContainer,
    Content,
    ContentSmall,
    StyledCloseSVG,
    StatusIconContainer
};
export { BaseNotification };
