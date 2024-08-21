const repeatString = function (str, count) {
  for (let i = 0; i < count; i++) {
    str += str;
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;
