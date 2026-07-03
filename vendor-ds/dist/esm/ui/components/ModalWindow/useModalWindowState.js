import { useMemo, useState } from "react";
const useModalWindowState = ({ initialOpen = false } = {})=>{
    const [isOpen, setIsOpen] = useState(initialOpen);
    const open = ()=>{
        setIsOpen(true);
    };
    const close = ()=>{
        setIsOpen(false);
    };
    return useMemo(()=>[
            isOpen,
            open,
            close,
            setIsOpen
        ], [
        isOpen
    ]);
};
export { useModalWindowState };
