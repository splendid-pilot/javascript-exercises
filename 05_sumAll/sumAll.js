const sumAll = function (start, end) {
  if (start < 0 || !Number.isInteger(end) || !Number.isInteger(start)) {
    return "ERROR";
  }
  if (start > end) {
    let tmp = start;
    start = end;
    end = tmp;
  }
  for (let i = start + 1; i <= end; i++) {
    start += i;
  }
  return start;
};

// Do not edit below this line
module.exports = sumAll;
