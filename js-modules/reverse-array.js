module.exports = (n) => {
    const arr = n.toString().split('').map(Number).reverse();
    return arr;
}