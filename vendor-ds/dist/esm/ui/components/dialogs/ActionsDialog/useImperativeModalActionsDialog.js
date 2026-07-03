import { useMemo } from "react";
import { useImperativeModalWindow } from "../../../providers/ImperativeModalWindowProvider/index.js";
import { ActionsDialog } from "./ActionsDialog.js";
const useImperativeModalActionsDialog = ()=>{
    const { openComponent: openModalWindow, close } = useImperativeModalWindow();
    return useMemo(()=>({
            open: (dialogProps, modalOptions)=>{
                openModalWindow({
                    component: ActionsDialog,
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
export { useImperativeModalActionsDialog };
