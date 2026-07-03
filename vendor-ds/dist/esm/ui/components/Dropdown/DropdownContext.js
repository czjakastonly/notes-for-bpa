import react, { useContext } from "react";
const DropdownContext = /*#__PURE__*/ react.createContext(void 0);
const useDropdownContext = ()=>useContext(DropdownContext);
export { DropdownContext, useDropdownContext };
