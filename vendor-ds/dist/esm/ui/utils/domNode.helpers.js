const isNodeScrolledIntoView = (node)=>{
    const elemTop = node.getBoundingClientRect().top;
    const elemBottom = node.getBoundingClientRect().bottom;
    return elemTop >= 0 && elemBottom <= window.innerHeight;
};
export { isNodeScrolledIntoView };
