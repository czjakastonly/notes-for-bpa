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
    ListItemStyles: ()=>ListItemStyles,
    focusListItemOutlineStyle: ()=>focusListItemOutlineStyle
});
const external_styled_components_namespaceObject = require("styled-components");
var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(external_styled_components_namespaceObject);
const Tick_16_cjs_namespaceObject = require("../../../atoms/icons/Tick-16.cjs");
var Tick_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(Tick_16_cjs_namespaceObject);
const ChevronRight_16_cjs_namespaceObject = require("../../../atoms/icons/ChevronRight-16.cjs");
var ChevronRight_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(ChevronRight_16_cjs_namespaceObject);
const ChevronLeft_16_cjs_namespaceObject = require("../../../atoms/icons/ChevronLeft-16.cjs");
var ChevronLeft_16_cjs_default = /*#__PURE__*/ __webpack_require__.n(ChevronLeft_16_cjs_namespaceObject);
const focusListItemOutlineStyle = (0, external_styled_components_namespaceObject.css)`
  outline: 2px solid ${({ theme })=>theme.color.borderFocus};
  outline-offset: -1px;
`;
const TextContainer = external_styled_components_default().div`
  width: 100%;
`;
const TitleContainer = external_styled_components_default().div`
  display: flex;
`;
const DescriptionContainer = external_styled_components_default().div`
  display: flex;
  align-items: flex-start;
`;
const Badge = external_styled_components_default().div`
  ${(props)=>props.theme.typography.uiElementSmallStrong};
  color: ${(props)=>props.theme.color.textDefaultInverse};
  padding: 0 4px;
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
const Title = external_styled_components_default().div`
  color: ${(props)=>props.theme.color.textDefault};
  ${(props)=>props.theme.typography.uiElementStrong};
`;
const Description = external_styled_components_default().div`
  color: ${(props)=>props.theme.color.textSubtle};
  ${(props)=>props.theme.typography.uiElementSmall};
`;
const TickIcon = external_styled_components_default()(Tick_16_cjs_default())`
  margin-left: 12px;
  margin-top: 2px;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  path {
    fill: ${(props)=>props.theme.color.iconSuccess};
  }
`;
const ChevronRightIcon = external_styled_components_default()(ChevronRight_16_cjs_default())`
  flex-shrink: 0;
  margin: auto 0;
  margin-left: 12px;
`;
const ChevronLeftIcon = external_styled_components_default()(ChevronLeft_16_cjs_default())`
  path {
    color: ${({ theme })=>theme.color.iconDefaultWithText};
  }
`;
const IconContainer = external_styled_components_default().div`
  width: 16px;
  height: 16px;
  margin-top: 2px;
  flex-shrink: 0;

  svg,
  img {
    width: 100%;
    height: 100%;
  }
`;
const LeftIconContainer = external_styled_components_default()(IconContainer)`
  margin-right: 8px;
`;
const TrailingIconContainer = external_styled_components_default()(IconContainer)`
  margin-left: 8px;
`;
const RightIconContainer = external_styled_components_default()(IconContainer)`
  margin-left: 12px;
`;
const ContentTypeIconContainer = external_styled_components_default()(IconContainer)`
  margin-top: 0;
  margin-right: 4px;
  width: 12px;
  height: 20px;
`;
const Container = external_styled_components_default().div`
  display: flex;
  padding: 8px 16px 8px 12px;
  border-radius: 4px;
  transition: background-color 0.2s;
  cursor: pointer;
  scroll-margin: 50px;
`;
const ContainerSelectable = external_styled_components_default()(Container)`
  ${({ isHighlighted })=>isHighlighted && focusListItemOutlineStyle};

  &:focus-visible {
    ${focusListItemOutlineStyle};
  }

  &:active {
    ${Title} {
      color: ${(props)=>props.theme.color.textSuccess};
    }
  }

  ${({ theme, isSelected })=>isSelected && (0, external_styled_components_namespaceObject.css)`
      ${Title} {
        color: ${theme.color.textDark};
      }
    `}

  ${({ theme, isDisabled })=>!isDisabled && (0, external_styled_components_namespaceObject.css)`
      &:hover {
        background-color: ${theme.color.backgroundDefaultHover};

        ${Title} {
          color: ${theme.color.textDark};
        }
      }
    `}

  ${({ theme, isDisabled })=>isDisabled && (0, external_styled_components_namespaceObject.css)`
      pointer-events: none;
      ${Title} {
        color: ${theme.color.textPlaceholder};
      }
      ${Badge} {
        background-color: ${theme.color.backgroundGraySubtle};
      }

      ${IconContainer} {
        svg path {
          fill: ${theme.color.iconSubtle};
        }
      }

      ${ChevronRightIcon} {
        path {
          fill: ${theme.color.iconSubtle};
        }
      }
    `}
`;
const ContainerDelete = external_styled_components_default()(Container)`
  ${Title} {
    color: ${(props)=>props.theme.color.textDanger};
    ${(props)=>props.theme.typography.uiElementStrong};
  }

  ${LeftIconContainer} {
    svg path {
      fill: ${(props)=>props.theme.color.iconDanger};
    }
  }

  ${({ isHighlighted, theme })=>isHighlighted && (0, external_styled_components_namespaceObject.css)`
      background-color: ${theme.color.backgroundDanger}0D;
      ${focusListItemOutlineStyle};
    `}

  ${({ theme, isDisabled })=>!isDisabled && (0, external_styled_components_namespaceObject.css)`
      &:hover {
        background-color: ${theme.color.backgroundDanger}0D;
      }
    `}


${({ theme, isDisabled })=>isDisabled && (0, external_styled_components_namespaceObject.css)`
      pointer-events: none;
      background-color: ${theme.color.backgroundGraySubtlest};

      ${Title} {
        color: ${theme.color.textPlaceholder};
      }
      ${LeftIconContainer} {
        svg path {
          fill: ${theme.color.iconSubtle};
        }
      }
    `}
`;
const HeaderTitle = external_styled_components_default().div`
  color: ${({ theme })=>theme.color.textDark};
  ${({ theme })=>theme.typography.h3};
  flex-grow: 1;
  cursor: default;
`;
const ListItemStyles = {
    Container,
    ContainerSelectable,
    ContainerDelete,
    TextContainer,
    TitleContainer,
    DescriptionContainer,
    Title,
    Description,
    Badge,
    IconContainer,
    TickIcon,
    LeftIconContainer,
    RightIconContainer,
    TrailingIconContainer,
    ContentTypeIconContainer,
    ChevronRightIcon,
    HeaderTitle,
    ChevronLeftIcon
};
exports.ListItemStyles = __webpack_exports__.ListItemStyles;
exports.focusListItemOutlineStyle = __webpack_exports__.focusListItemOutlineStyle;
for(var __rspack_i in __webpack_exports__)if (-1 === [
    "ListItemStyles",
    "focusListItemOutlineStyle"
].indexOf(__rspack_i)) exports[__rspack_i] = __webpack_exports__[__rspack_i];
Object.defineProperty(exports, '__esModule', {
    value: true
});
