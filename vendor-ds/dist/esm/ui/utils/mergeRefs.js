import { useCallback } from "react";
function setRef(ref, value) {
    if ('function' == typeof ref) ref(value);
    else if (null != ref) ref.current = value;
}
function mergeRefs(...refs) {
    return (node)=>refs.forEach((ref)=>setRef(ref, node));
}
function useMergeRefs(...refs) {
    return useCallback(mergeRefs(...refs), refs);
}
export { mergeRefs, useMergeRefs };
