/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let totalOdd = 0;
  let totalEven = 0;
  position.forEach((pos, index) => {
    if (pos % 2 === 0) {
      totalEven++;
    } else {
      totalOdd++;
    }
  });
  return Math.min(totalOdd, totalEven);
};
