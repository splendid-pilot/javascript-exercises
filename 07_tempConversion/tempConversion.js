const convertToCelsius = function (f) {
  return roundToOne(((f - 32) * 5) / 9);
};

const convertToFahrenheit = function (c) {
  let result = (c * 9) / 5 + 32;
  return roundToOne(result);
};
function roundToOne(num) {
  let decimal = num - Math.floor(num);
  console.log(
    `num: ${num}, decimal: ${decimal} ${Math.floor(decimal * 10) / 10 + num}`,
  );
  if (decimal === 0) {
    return num;
  } else {
    return Math.floor(decimal * 10) / 10 + Math.floor(num);
  }
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
