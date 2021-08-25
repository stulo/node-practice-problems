const arrayDiff = require('./array-diff.js');
var arr1 = [1, 2, 2, 2, 3];
var arr2 = [2];

console.info('\x1b[32m%s\x1b[0m', 'Subtract One List From Another'); // green text
console.log(
  `Array 1: ${JSON.stringify(arr1)} Array 2: ${JSON.stringify(
    arr2
  )} Result: ${JSON.stringify(arrayDiff(arr1, arr2))}`
);
