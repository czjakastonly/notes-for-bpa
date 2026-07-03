const mergeClassNames = (...args)=>{
    const mergedClassString = [
        args
    ].flat(1 / 0).filter(Boolean).join(' ');
    return mergedClassString || void 0;
};
export { mergeClassNames };
