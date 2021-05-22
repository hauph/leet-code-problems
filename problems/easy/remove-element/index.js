/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    const foundIdx = nums.indexOf(val);
    if (foundIdx > -1) {
        nums.splice(foundIdx, 1);
        removeElement(nums, val);
    } else {
        return nums.length;
    }
};