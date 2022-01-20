/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const indexArr = [];
  for (let i = 0; i < s.length; i++) {
    const character = s[i];
    if (character === c) {
      indexArr.push(i);
    }
  }

  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (indexArr.includes(i)) {
      result[i] = 0;
      continue;
    }

    let distance = null;
    for (let j = 0; j < indexArr.length; j++) {
      const d = Math.abs(i - indexArr[j]);
      if (distance === null) {
        distance = d;
      } else {
        distance = distance > d ? d : distance;
      }
    }
    result[i] = distance;
  }

  return result;
};
