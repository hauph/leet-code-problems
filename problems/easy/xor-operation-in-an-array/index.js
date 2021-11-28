/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const numb = start + 2 * i;
    arr.push(numb);
  }
  const res = arr.reduce((accNum, currN) => accNum ^ currN);
  return res;
};
