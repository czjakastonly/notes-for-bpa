import react from "react";
import styled_components, { useTheme } from "styled-components";
const Svg = styled_components.svg`
  transform: scale(1.25); // 16px has to be changed to 20px
  transform-origin: center;
`;
const ColorRect = ({ colorValue = '', disabled })=>{
    const theme = useTheme();
    const backgroundStrokeColor = disabled ? theme.color.backgroundGraySubtle : theme.color.backgroundGrayDefault;
    const backgroundStrokeDasharray = disabled || !colorValue ? '4 4' : void 0;
    const foregroundPreviewColor = disabled ? theme.color.backgroundGraySubtle : colorValue;
    return /*#__PURE__*/ react.createElement(Svg, {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none"
    }, /*#__PURE__*/ react.createElement("rect", {
        x: "0.5",
        y: "0.5",
        width: "19",
        height: "19",
        rx: "1.5",
        fill: "none",
        stroke: backgroundStrokeColor,
        strokeWidth: "1",
        strokeDasharray: backgroundStrokeDasharray
    }), /*#__PURE__*/ react.createElement("rect", {
        x: "0.5",
        y: "0.5",
        width: "19",
        height: "19",
        rx: "1.5",
        fill: foregroundPreviewColor,
        stroke: foregroundPreviewColor,
        strokeOpacity: "0.5",
        strokeWidth: "1"
    }));
};
export { ColorRect };
