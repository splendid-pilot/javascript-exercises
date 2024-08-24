const LOWERCASE_A = "a".charCodeAt(0);
const LOWERCASE_Z = "z".charCodeAt(0);
const UPPERCASE_A = "A".charCodeAt(0);
const UPPERCASE_Z = "Z".charCodeAt(0);
const ALPHABET_SIZE = 26;

const caesar = (str: string, shift: number): string => {
  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
};
const shiftChar = (char: string, shift: number): string => {
  const code = char.charCodeAt(0);
  if (isLower(code)) return shiftWithinBounds(code, shift, LOWERCASE_A);
  if (isUpper(code)) return shiftWithinBounds(code, shift, UPPERCASE_A);
  return char;
};

const shiftWithinBounds = (
  code: number,
  shift: number,
  min: number,
): string => {
  const shiftedCode =
    ((((code - min + shift) % ALPHABET_SIZE) + ALPHABET_SIZE) % ALPHABET_SIZE) +
    min;
  return String.fromCharCode(shiftedCode);
};

const isLower = (code: number): boolean =>
  code >= LOWERCASE_A && code <= LOWERCASE_Z;
const isUpper = (code: number): boolean =>
  code >= UPPERCASE_A && code <= UPPERCASE_Z;

// Do not edit below this line
module.exports = caesar;
