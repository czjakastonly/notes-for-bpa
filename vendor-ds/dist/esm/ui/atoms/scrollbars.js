import { css } from "styled-components";
const scrollbars = {
    basic: css`
    &::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }

    &::-webkit-scrollbar-track {
      opacity: 0;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props)=>props.theme.color.borderDefault};
      border-radius: 6px;
      border: 2px solid white;
      background-size: cover;
      background-position: center;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${(props)=>props.theme.color.borderDefaultHover};
    }
  `
};
export { scrollbars };
