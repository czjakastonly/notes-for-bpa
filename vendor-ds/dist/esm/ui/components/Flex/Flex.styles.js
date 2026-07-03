import styled_components from "styled-components";
const Canvas = styled_components.div`
  display: ${({ $display })=>$display};
  min-height: 0;
  min-width: 0;
  align-items: ${({ $alignItems })=>$alignItems};
  justify-content: ${({ $justifyContent })=>$justifyContent};
  flex-direction: ${({ $direction, $reverse })=>$direction && `${$direction}${$reverse ? '-reverse' : ''}`};
  flex-grow: ${({ $flexGrow })=>$flexGrow};
  flex-shrink: ${({ $flexShrink })=>$flexShrink};
  flex-basis: ${({ $flexBasis })=>$flexBasis};
  flex-wrap: ${({ $flexWrap })=>$flexWrap};

  gap: ${({ $gap })=>$gap};
  margin: ${({ $margin })=>$margin};
  padding: ${({ $padding })=>$padding};
  position: ${({ $position })=>$position};
`;
export { Canvas };
