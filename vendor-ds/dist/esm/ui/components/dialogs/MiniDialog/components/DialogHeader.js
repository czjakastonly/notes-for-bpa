import react, { useEffect, useState } from "react";
import styled_components, { css } from "styled-components";
import { ButtonMinimal } from "../../../buttons/ButtonMinimal/index.js";
import ChevronLeft_16 from "../../../../atoms/icons/ChevronLeft-16.js";
import { useContentWrapRef } from "../../_shared/ContentWrapRefContext.js";
const Header = styled_components.div`
  display: flex;
  vertical-align: middle;
  padding: 12px 16px;
  gap: 8px;
  border-bottom: 1px solid ${(props)=>props.theme.color.backgroundDefault};
  ${({ $showBottomDivider })=>$showBottomDivider && css`
      border-bottom-color: ${(props)=>props.theme.color.borderSubtle};
    `}
`;
const TitleText = styled_components.h2`
  ${(props)=>props.theme.typography.h3};
  display: flex;
  align-items: center;
  color: ${(props)=>props.theme.color.textDark};
  margin-bottom: 0;
  margin-top: 0;
`;
const DialogHeader = ({ onBackClick, children, titleId, showBottomDivider })=>{
    const contentWrapRef = useContentWrapRef();
    const [isSeparatorVisible, setIsSeparatorVisible] = useState(false);
    useEffect(()=>{
        const scrollableElement = null == contentWrapRef ? void 0 : contentWrapRef.current;
        if (scrollableElement) {
            const onScroll = ()=>{
                setIsSeparatorVisible(scrollableElement.scrollTop > 1);
            };
            scrollableElement.addEventListener('scroll', onScroll);
            return ()=>{
                scrollableElement.removeEventListener('scroll', onScroll);
            };
        }
    }, [
        contentWrapRef
    ]);
    const isBottomDividerVisible = 'boolean' == typeof showBottomDivider ? showBottomDivider : isSeparatorVisible;
    return /*#__PURE__*/ react.createElement(Header, {
        $showBottomDivider: isBottomDividerVisible
    }, onBackClick && /*#__PURE__*/ react.createElement("div", {
        style: {
            marginLeft: '-8px'
        }
    }, /*#__PURE__*/ react.createElement(ButtonMinimal, {
        iconOnly: /*#__PURE__*/ react.createElement(ChevronLeft_16, null),
        "aria-label": "back",
        size: "small",
        onClick: onBackClick
    })), /*#__PURE__*/ react.createElement(TitleText, {
        "data-cy": "dialogTitle",
        id: titleId
    }, children));
};
export { DialogHeader };
