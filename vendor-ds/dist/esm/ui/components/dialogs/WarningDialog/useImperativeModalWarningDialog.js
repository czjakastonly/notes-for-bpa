import { useMemo } from "react";
import { useImperativeModalWindow } from "../../../providers/ImperativeModalWindowProvider/index.js";
import { WarningDialog } from "./WarningDialog.js";
const useImperativeModalWarningDialog = ()=>{
    const { openComponent: openModalWindow, close } = useImperativeModalWindow();
    return useMemo(()=>({
            open: (dialogProps, modalOptions)=>{
                openModalWindow({
                    component: WarningDialog,
                    componentProps: dialogProps,
                    modalWindowOptions: modalOptions
                });
            },
            close
        }), [
        openModalWindow,
        close
    ]);
};
export { useImperativeModalWarningDialog };
