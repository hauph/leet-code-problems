/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let subString = "";

  for (let i = num.length - 1; i >= 0; i--) {
    const numb = Number(num[i]);
    if (numb % 2 !== 0) {
      subString = num.substring(0, i + 1);
      break;
    }
  }

  return subString;
};
