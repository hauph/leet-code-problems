/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currMax = nums[0];
    const result = nums.reduce((max, num, index) => {
        if (index > 0) {
            currMax = currMax + num < num ? num : currMax + num;
            max = currMax > max ? currMax : max;
        }

        return max;
    }, nums[0]);
    
    return result;
};
