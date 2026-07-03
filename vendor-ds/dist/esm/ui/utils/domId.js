import { useMemo } from "react";
const useDomId = (id)=>useMemo(()=>id || `x${Math.random().toString(36).slice(2)}`, [
        id
    ]);
const generateErrorMessageDomId = (id, condition = true)=>condition && id ? `errormessage-for-${id}` : void 0;
const generateLabelDomId = (id, condition = true)=>id && condition ? `label-for-${id}` : void 0;
const generateDescribeDomId = (id, condition = true)=>id && condition ? `describe-for-${id}` : void 0;
const generateListboxDomId = (id, condition = true)=>id && condition ? `listbox-for-${id}` : void 0;
const generateDialogDomId = (id, condition = true)=>id && condition ? `dialog-for-${id}` : void 0;
export { generateDescribeDomId, generateDialogDomId, generateErrorMessageDomId, generateLabelDomId, generateListboxDomId, useDomId };
