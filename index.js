exports.countDOM = function () {
    let count = document.getElementsByTagName('*').length
    console.log(`${count} elements found.`);
}