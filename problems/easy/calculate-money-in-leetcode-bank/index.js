/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let total = 0;
  let monday = 0;
  let accumulation = 0;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      monday = 1;
      accumulation = monday;
    } else if (i > 0 && i % 7 === 0) {
      monday++;
      accumulation = monday;
    } else {
      accumulation++;
    }
    total += accumulation;
  }

  return total;
};
