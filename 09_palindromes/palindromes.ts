const rExp: RegExp = /[A-Za-z0-9]/;
const inRange = (char: string): boolean => rExp.test(char);
const palindromes = (str: string) => {
  const len = str.length;
  if (len <= 1) {
    return true;
  }
  let i = 0;
  let j = len - 1;
  while (i <= j) {
    while (!inRange(str[i])) {
      i++;
    }

    while (!inRange(str[j])) {
      j--;
    }
    if (str[i].toLowerCase() !== str[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
