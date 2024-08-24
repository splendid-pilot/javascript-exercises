const WORD = /\b\w+\b/gm;
const snakeCase = (str: string): string => {
  str = str.toLowerCase();
  return str.match(WORD)?.join("_");
};

console.log("hello word".match(WORD));

console.log("hello world".match(WORD));
console.log("Hello, World???".match(WORD));
console.log("snakeCase".match(WORD));
console.log("snake-case".match(WORD));
console.log("SnAkE..CaSe..Is..AwEsOmE".match(WORD));
// Do not edit below this line
module.exports = snakeCase;
