const convertToCelsius = function (f) {
  return roundToOne(((f - 32) * 5) / 9);
};

const convertToFahrenheit = function (c) {
  return roundToOne((c * 9) / 5 + 32);
};
function roundToOne(num, decimalPlaces = 1) {
  num = Math.round(num + "e" + decimalPlaces);
  return Number(num + "e" + -decimalPlaces);
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
