/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    const index = nums.indexOf(target);
    if (index !== -1) {
        return index;
    } else {
        let result;
        for (let i = nums.length - 1; i >= 0; i--) {
            const num = nums[i];
            if (num < target) {
                result = i + 1;
                break;
            }
            if (i === 0) {
                result = 0
            }
        }
        return result;
    }
};