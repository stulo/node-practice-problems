const parity = require("./parity.js");
const numString = "1, 3, 6, 7, 9";

console.info("\x1b[32m%s\x1b[0m", "Check for even or odd numbers"); // green text
console.log(
  `String: ${numString}. Position of even or odd: ${parity(numString)}`
);
