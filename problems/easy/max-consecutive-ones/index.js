/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let currentMax = 0;
  let globalMax = 0;
  nums.forEach((num, index) => {
    if (num === 1) {
      currentMax += 1;
      if (index === nums.length - 1) {
        globalMax = Math.max(globalMax, currentMax);
      }
    } else {
      globalMax = Math.max(globalMax, currentMax);
      currentMax = 0;
    }
  });
  return globalMax;
};
