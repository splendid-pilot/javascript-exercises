const pigLatin = (str: string): string =>
  str
    .split(" ")
    .map((word) => {
      const index = firstVowelIndex(word);
      const beginning = word.slice(0, index);
      const ending = word.slice(index);
      return `${ending}${beginning}ay`;
    })
    .join(" ");

const firstVowelIndex = (str: string): number => {
  const vowels = str.match(/[aeiou]/g);
  if (vowels == null) {
    return 0;
  }
  if (vowels[0] == "u" && str[str.indexOf(vowels[0]) - 1] == "q") {
    return str.indexOf(vowels[1]);
  } else {
    return str.indexOf(vowels[0]);
  }
};

module.exports = pigLatin;
