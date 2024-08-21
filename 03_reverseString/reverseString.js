const reverseString = function (str) {
  let result = "";
  const strLength = str.length;
  for (let i = strLength - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
