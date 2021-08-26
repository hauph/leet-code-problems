/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  const numOnes = s.match(/([11])+/g);
  const numZeros = s.match(/([00])+/g);
  let longestOne = 0,
    longestZero = 0;
  if (numOnes !== null) {
    longestOne = numOnes.reduce((num, item) => {
      if (item.length > num) num = item.length;
      return num;
    }, 1);
  }
  if (numZeros !== null) {
    longestZero = numZeros.reduce((num, item) => {
      if (item.length > num) num = item.length;
      return num;
    }, 1);
  }
  return longestOne > longestZero;
};
