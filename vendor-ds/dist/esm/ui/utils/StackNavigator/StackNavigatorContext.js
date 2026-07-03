import react, { useContext } from "react";
const StackNavigatorContext = /*#__PURE__*/ react.createContext(void 0);
const useStackNavigatorContext = ()=>useContext(StackNavigatorContext);
export { StackNavigatorContext, useStackNavigatorContext };
