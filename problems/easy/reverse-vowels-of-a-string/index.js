/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let reverseVowels = "";
  let currentIndex = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const cLowerCase = c.toLowerCase();
    if (
      cLowerCase !== "a" &&
      cLowerCase !== "e" &&
      cLowerCase !== "i" &&
      cLowerCase !== "o" &&
      cLowerCase !== "u"
    ) {
      reverseVowels += c;
    } else {
      for (let j = currentIndex; j >= 0; j--) {
        const v = s[j];
        const vLowerCase = v.toLowerCase();
        if (
          vLowerCase === "a" ||
          vLowerCase === "e" ||
          vLowerCase === "i" ||
          vLowerCase === "o" ||
          vLowerCase === "u"
        ) {
          reverseVowels += v;
          currentIndex = j - 1;
          break;
        }
      }
    }
  }

  return reverseVowels;
};
