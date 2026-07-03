function findOptionDataInReactChild(child) {
    const childProps = null == child ? void 0 : child.props;
    if (!!childProps && [
        'string',
        'number',
        'object'
    ].includes(typeof childProps.value)) return childProps;
}
export { findOptionDataInReactChild };
