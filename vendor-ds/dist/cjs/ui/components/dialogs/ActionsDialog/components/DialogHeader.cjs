"use strict";
var __webpack_require__ = {};
(()=>{
    __webpack_require__.n = (module)=>{
        var getter = module && module.__esModule ? ()=>module['default'] : ()=>module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();
(()=>{
    __webpack_require__.d = (exports1, definition)=>{
        for(var key in definition)if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports1, key)) Object.defineProperty(exports1, key, {
            enumerable: true,
            get: definition[key]
        });
    };
})();
(()=>{
    __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
})();
(()=>{
    __webpack_require__.r = (exports1)=>{
        if ("u" > typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports1, Symbol.toStringTag, {
            value: 'Module'
        });
        Object.defineProperty(exports1, '__esModule', {
            value: true
        });
    };
})();
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
    DialogHeader: ()=>DialogHeader
});
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/ __webpack_require__.n(external_react_namespaceObject);
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const ContentWrapRefContext_cjs_namespaceObject = require("../../_shared/ContentWrapRefContext.cjs");
const Header = external_styled_components_default().div`
  padding: 32px 64px 32px 32px;
  border-bottom: 1px solid ${(props)=>props.theme.color.backgroundDefault};
  ${({ $showBottomDivider })=>$showBottomDivider && (0, external_styled_components_namespaceObject.css)`
      border-bottom-color: ${(props)=>props.theme.color.borderSubtle};
    `}
`;
const IconLeftWrap = external_styled_components_default().div`
  margin-right: 16px;
  line-height: 0;
  flex-shrink: 0;

  svg {
    display: block;
  }
`;
const TitleText = external_styled_components_default().h2`
  ${(props)=>props.theme.typography.h2};
  display: flex;
  align-items: center;
  color: ${(props)=>props.theme.color.textDark};
  margin-bottom: 0;
  margin-top: 0;
`;
const DialogHeader = ({ iconLeft, children, titleId, showBottomDivider })=>{
    const contentWrapRef = (0, ContentWrapRefContext_cjs_namespaceObject.useContentWrapRef)();
    const [isSeparatorVisible, setIsSeparatorVisible] = (0, external_react_namespaceObject.useState)(false);
    (0, external_react_namespaceObject.useEffect)(()=>{
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
    return /*#__PURE__*/ external_react_default().createElement(Header, {
        $showBottomDivider: isBottomDividerVisible
    }, /*#__PURE__*/ external_react_default().createElement(TitleText, {
        "data-cy": "dialogTitle",
        id: titleId
    }, iconLeft && /*#__PURE__*/ external_react_default().createElement(IconLeftWrap, {
        "aria-hidden": true
    }, iconLeft), children));
};
exports.DialogHeader = __webpack_exports__.DialogHeader;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "DialogHeader"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
