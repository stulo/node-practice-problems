const persistence = require("./persistence.js");
const num = 999;

console.info("\x1b[32m%s\x1b[0m", "Multiplicative Persistence"); // green text
console.log(`Integer: ${num}. Number of times: ${persistence(num)}`);
