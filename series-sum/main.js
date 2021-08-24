const getSum = require('./series-sum.js');
const a = Math.floor(Math.random() * 10);
const b = Math.floor(Math.random() * 10);

console.info('\x1b[32m%s\x1b[0m', 'Finding the Sum Between Two Integers'); // green text
console.log(`(${a}, ${b}) = ${getSum(a, b)}`);
