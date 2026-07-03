import react from "react";
import styled_components from "styled-components";
const Image = styled_components.span`
  width: 16px;
  height: 16px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const IconSrc = ({ backgroundImageUrl, className, 'aria-label': ariaLabel, 'aria-hidden': ariaHidden })=>{
    const srcArr = Array.isArray(backgroundImageUrl) ? backgroundImageUrl : [
        backgroundImageUrl
    ];
    const backgroundImage = srcArr.map((url)=>`url(${url})`).join(', ');
    return /*#__PURE__*/ react.createElement(Image, {
        className: className,
        style: {
            backgroundImage
        },
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden
    });
};
export { IconSrc, Image };
