const elementDepth = (el) => {
    let depth = 0
    while (null !== el.parentElement) {
        el = el.parentElement
        depth++
    }
    return depth
}

exports.countDOM = () => {
    return document.getElementsByTagName('*').length;
}
exports.maxDepth = () => {
    const depths = []
    Array.from(document.querySelectorAll("*")).forEach(node => {
        depths.push(elementDepth(node));
    });
    return Math.max(...depths)
}
exports.maxChildren = (excluded=['head']) => {
    const children = []
    Array.from(document.querySelectorAll("*")).filter(node =>
        !node.closest(...excluded)
    ).forEach(node => {
        children.push(node.childElementCount);
    });
    return Math.max(...children)
}
