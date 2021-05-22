/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    const remove = (nums, val) => {
        let count = 0;
        nums.forEach(num => {
            if (num === val) {
                count += 1;
            }
        })
        if (count > 1) {
            const foundIdx = nums.indexOf(val);
            if (foundIdx > -1) {
                nums.splice(foundIdx, 1);
                remove(nums, val);
            }
        } else {
            return nums.length;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        remove(nums, nums[i])
    }
    
};