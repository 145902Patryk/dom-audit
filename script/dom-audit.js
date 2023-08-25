const elementDepth = (el) => {
    let depth = 0
    while (null !== el.parentElement) {
        el = el.parentElement
        depth++
    }
    return depth
}

const countDOM = () => {
    return document.querySelectorAll('*').length;
}
const maxDepth = () => {
    const depths = []
    Array.from(document.querySelectorAll('*')).forEach(node => {
        depths.push(elementDepth(node));
    });
    return Math.max(...depths)
}
const maxChildren = (excluded = ['head']) => {
    const children = []
    Array.from(document.querySelectorAll('*')).filter(node =>
        !node.closest(...excluded)
    ).forEach(node => {
        console.log(node, node.childElementCount)
        children.push(node.childElementCount);
    });
    return Math.max(...children)
}
