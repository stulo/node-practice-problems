module.exports = (numbers) => {
  var allNumbers = [];
  var evenNumbers = [];
  var oddNumbers = [];

  allNumbers = numbers.split(",");

  for (var i = 0; i < allNumbers.length; i++) {
    if (allNumbers[i] % 2 === 0) {
      evenNumbers.push(i);
    } else {
      oddNumbers.push(i);
    }
  }

  if (evenNumbers.length > 1) return oddNumbers[0] + 1;
  return evenNumbers[0] + 1;
};
