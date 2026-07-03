import react from "react";
import styled_components, { css } from "styled-components";
import TriangleArrowDown_12 from "../../../atoms/icons/TriangleArrowDown-12.js";
const Container = styled_components.div`
  height: 36px;
  position: relative;
  padding: 0 6px;
`;
const Arrow = styled_components(TriangleArrowDown_12)`
  position: absolute;
  cursor: pointer;
  outline: none;
  left: 0;
  path {
    transition: fill 0.2s;
    fill: ${({ theme })=>theme.color.iconDefault};
  }

  ${({ $active, theme })=>$active && css`
      background-color: ${theme.color.backgroundDefaultActive};
    `}

  &:hover {
    background-color: ${({ theme })=>theme.color.backgroundDefaultHover};
  }

  &:first-child {
    top: 4px;
    transform: rotate(180deg);
  }

  &:last-child {
    bottom: 4px;
  }
`;
const Arrows = ({ onDownClick, onUpClick, isDownActive, isUpActive, disabled })=>/*#__PURE__*/ react.createElement(Container, null, /*#__PURE__*/ react.createElement(Arrow, {
        $disabled: disabled,
        $active: isUpActive,
        onClick: onUpClick,
        onMouseDown: (e)=>e.preventDefault(),
        "aria-hidden": true
    }), /*#__PURE__*/ react.createElement(Arrow, {
        $disabled: disabled,
        $active: isDownActive,
        onClick: onDownClick,
        onMouseDown: (e)=>e.preventDefault(),
        "aria-hidden": true
    }));
export { Arrows };
