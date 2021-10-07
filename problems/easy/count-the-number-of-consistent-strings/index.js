/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let res = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let counter = 0;
    for (let j = 0; j < word.length; j++) {
      const c = word[j];
      if (allowed.includes(c)) {
        counter += 1;
      } else {
        break;
      }
    }
    if (counter === word.length) {
      res += 1;
    }
  }
  return res;
};
