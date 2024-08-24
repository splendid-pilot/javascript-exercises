const WORD = /\b\w+\b/gm;
const snakeCase = (str) => {
  str = str.replace(/\.\./g, " ");
  if (str.indexOf(" ") < 0) {
    str = str.replace(/([A-Z])/g, " $1");
  }
  return str.match(WORD).join("_").toLowerCase();
};
// Do not edit below this line
module.exports = snakeCase;
