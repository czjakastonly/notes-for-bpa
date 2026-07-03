import react, { useEffect, useState } from "react";
import styled_components, { css } from "styled-components";
import { useContentWrapRef } from "../../_shared/ContentWrapRefContext.js";
const Header = styled_components.div`
  padding: 32px 64px 32px 32px;
  border-bottom: 1px solid ${(props)=>props.theme.color.backgroundDefault};
  ${({ $showBottomDivider })=>$showBottomDivider && css`
      border-bottom-color: ${(props)=>props.theme.color.borderSubtle};
    `}
`;
const IconLeftWrap = styled_components.div`
  margin-right: 16px;
  line-height: 0;
  flex-shrink: 0;

  svg {
    display: block;
  }
`;
const TitleText = styled_components.h2`
  ${(props)=>props.theme.typography.h2};
  display: flex;
  align-items: center;
  color: ${(props)=>props.theme.color.textDark};
  margin-bottom: 0;
  margin-top: 0;
`;
const DialogHeader = ({ iconLeft, children, titleId, showBottomDivider })=>{
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
    }, /*#__PURE__*/ react.createElement(TitleText, {
        "data-cy": "dialogTitle",
        id: titleId
    }, iconLeft && /*#__PURE__*/ react.createElement(IconLeftWrap, {
        "aria-hidden": true
    }, iconLeft), children));
};
export { DialogHeader };
