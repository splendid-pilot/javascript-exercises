const removeFromArray = function (array, ...values) {
  let result = [];
  for (let value of values) {
    while (true) {
      let idx = array.indexOf(value);
      if (idx !== -1) {
        array.splice(idx, 1);
      } else {
        break;
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
