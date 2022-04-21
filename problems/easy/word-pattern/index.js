/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const obj1 = {};
  let str1 = "";

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];

    if (!obj1[char]) {
      obj1[char] = `${i}_`;
      str1 += obj1[char];
    } else {
      str1 += obj1[char];
    }
  }

  const arrFromS = s.split(" ");
  const obj2 = {};

  const str2 = arrFromS.reduce((str, curr, i) => {
    if (!obj2[curr]) {
      obj2[curr] = `${i}_`;
      str += obj2[curr];
    } else {
      str += obj2[curr];
    }

    return str;
  }, "");

  return str1 === str2;
};
