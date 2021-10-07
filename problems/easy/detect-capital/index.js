/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  const lowerWord = word.toLowerCase();
  if (lowerWord === word) return true;
  const indexArr = [];
  for (let i = 0; i < word.length; i++) {
    const c1 = word[i];
    for (let j = 0; j < lowerWord.length; j++) {
      const c2 = lowerWord[j];
      if (i === j && c1 !== c2) {
        indexArr.push(i);
      }
    }
  }

  const res =
    (indexArr.length === 1 && indexArr[0] === 0) ||
    indexArr.length === word.length
      ? true
      : false;

  return res;
};
