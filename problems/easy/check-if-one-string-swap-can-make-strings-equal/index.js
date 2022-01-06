/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;

  let pos = null;
  let newString = [];
  let counter = 0;
  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    if (s2[i] !== char1) {
      if (pos === null) {
        pos = i;
      } else {
        if (s2[pos] === s1[i] && s2[i] === s1[pos]) {
          newString[pos] = s1[i];
          newString[i] = s1[pos];
        }
      }
      counter++;
    } else {
      newString[i] = char1;
    }
  }

  if (counter !== 2) return false;

  return newString.join("") === s2;
};
