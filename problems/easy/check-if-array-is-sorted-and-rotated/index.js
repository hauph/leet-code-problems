/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const clonedNums = [...nums].sort((a, b) => a - b);

  if (JSON.stringify(nums) === JSON.stringify(clonedNums)) return true;

  let res = false;

  const isCorrectX = (x) => {
    let newArr = [];

    for (let i = 0; i < clonedNums.length; i++) {
      const rotatedIndex = (i + x) % clonedNums.length;

      if (clonedNums[i] === nums[rotatedIndex]) {
        const pt1 = nums.slice(i, x);
        const pt2 = nums.slice(x, nums.length);
        newArr = [...pt2, ...pt1];
        break;
      }
    }

    return JSON.stringify(clonedNums) === JSON.stringify(newArr);
  };

  for (let i = 0; i < nums.length; i++) {
    if (res) break;
    res = isCorrectX(i);
  }

  return res;
};
