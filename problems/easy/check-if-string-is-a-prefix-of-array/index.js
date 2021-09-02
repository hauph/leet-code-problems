/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  let str = "";
  let result = false;
  for (let i = 0; i < words.length; i++) {
    str += words[i];
    if (str === s) {
      result = true;
      break;
    }
  }

  return result;
};
