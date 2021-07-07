/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        for (let j = n; j < nums.length; j++) {
            if (i + n === j) {
                arr.push(nums[i]);
                arr.push(nums[j]);
            }
        }
    }
    return arr;
};