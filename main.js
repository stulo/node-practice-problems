// TODO: add user to input test cases

// check-for-even-or-odd.js
const parity = require('./js-modules/check-for-even-or-odd.js')
const numString = "1, 3, 6, 7, 9"

console.info('\x1b[32m%s\x1b[0m', 'Check for even or odd numbers')
console.log(`String: ${numString}. Position of even or odd: ${parity(numString)}`)

console.log('---------------------------------------------------------')

// reverse-array.js
const reverse = require('./js-modules/reverse-array.js')
const num = 123;

console.info('\x1b[32m%s\x1b[0m', 'Reversed array')
console.log(`Integer: ${num}. Reversed in array: ${JSON.stringify(reverse(num))}`)