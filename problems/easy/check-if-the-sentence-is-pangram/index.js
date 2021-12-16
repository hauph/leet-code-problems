/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const alphabets = [];
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (!alphabets.includes(char)) {
      alphabets.push(char);
    }
  }

  return alphabets.length >= 26;
};
