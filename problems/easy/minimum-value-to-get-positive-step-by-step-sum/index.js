/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    let startValue = 1;
    let bool = true;
    let arr = [];
    while (bool) {
        let result = 0;
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (i === 0) {
                result = startValue + num;
            } else {
                result += nums[i];
            }
            if (result >= 1) {
                arr.push(result);
            }
        }

        if (arr.length < nums.length) {
            startValue += 1;
            arr.length = 0;
        } else {
            bool = false;
        }
    }
    return startValue;
};