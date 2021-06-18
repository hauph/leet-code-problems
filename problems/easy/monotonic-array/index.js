/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let increasing = 0;
    let decreasing = 0;
    
    // check increasing case
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] - nums[i + 1] <= 0) {
            increasing += 1;
        }
    }

    if (increasing === nums.length - 1) {
        return true;
    } else {
        // check decreasing case
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] - nums[i + 1] >= 0) {
                decreasing += 1;
            }
        }
        
        if (decreasing === nums.length - 1) {
            return true
        }
    }
    
    return false;
};