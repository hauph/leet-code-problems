/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const halfIndex = s.length / 2 - 1;
  let totalVowel1 = 0;
  let totalVowel2 = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i].toLowerCase();
    if (
      i <= halfIndex &&
      (c === "a" || c === "e" || c === "i" || c === "o" || c === "u")
    ) {
      totalVowel1++;
    } else if (
      i > halfIndex &&
      (c === "a" || c === "e" || c === "i" || c === "o" || c === "u")
    ) {
      totalVowel2++;
    }
  }
  return totalVowel1 === totalVowel2;
};
