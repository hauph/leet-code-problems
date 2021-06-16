/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const arr = [];
    const obj = {};
    let i = 0;
    for (let j = 0; j < index.length; j++) {
        const k = index[j];
        if (!obj[k]) {
            if (arr[k]) {
                arr.splice(k, 0, nums[i]);
            } else {
                arr[k] = nums[i];
            }
            obj[k] = 1;
        } else {
            arr.splice(k, 0, nums[i]);
        }
        i += 1;
    }
    return arr;
};