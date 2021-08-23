module.exports = (num) => {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b) // a is previous value, b is current value
      .toString();
  }

  return times;
};
