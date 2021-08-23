const reverse = require('./reverse-array.js');
const num = 123;

console.info('\x1b[32m%s\x1b[0m', 'Reversed array'); // green text
console.log(
  `Integer: ${num}. Reversed in array: ${JSON.stringify(reverse(num))}`
);
