const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const sum = (array) => array.reduce((prev, curr) => prev + curr, 0);
const multiply = (array) => array.reduce((prev, curr) => prev * curr);

const power = (num, exp) => Math.pow(num, exp);

const factorial = (n) => {
  if (n < 0 || !Number.isInteger(n)) {
    return 0;
  }
  if (n < 2) {
    return 1;
  }
  let res = 2;
  for (let i = 3; i <= n; i++) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add: add,
  subtract: subtract,
  sum: sum,
  multiply: multiply,
  power: power,
  factorial: factorial,
};
