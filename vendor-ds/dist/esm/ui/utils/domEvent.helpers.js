const isSpaceHandledByTargetEvent = (e)=>{
    var _target_tagName, _target_type, _target_tagName1;
    const target = e.target;
    return (null == target ? void 0 : null == (_target_tagName = target.tagName) ? void 0 : _target_tagName.toUpperCase()) === 'INPUT' && [
        'TEXT',
        'BUTTON'
    ].includes(null == target ? void 0 : null == (_target_type = target.type) ? void 0 : _target_type.toUpperCase()) || (null == target ? void 0 : null == (_target_tagName1 = target.tagName) ? void 0 : _target_tagName1.toUpperCase()) === 'TEXTAREA' || (null == target ? void 0 : target.getAttribute('contenteditable')) === 'true';
};
export { isSpaceHandledByTargetEvent };
