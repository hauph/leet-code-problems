/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const arr = [];
  const sArr = s.split(" ");

  for (let i = 0; i < sArr.length; i++) {
    const word = sArr[i];
    const index = parseInt(word[word.length - 1]);
    arr[index - 1] = word.replace(index, "");
  }

  return arr.join(" ");
};
