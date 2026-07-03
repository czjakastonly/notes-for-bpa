import react, { useContext } from "react";
const ContentWrapRefContext = /*#__PURE__*/ react.createContext(null);
const useContentWrapRef = ()=>{
    const contentWrapRef = useContext(ContentWrapRefContext);
    if (!contentWrapRef) console.log('STON.WARNING - useContentWrapRef outside ContentWrapRefContext');
    return contentWrapRef;
};
export { ContentWrapRefContext, useContentWrapRef };
