/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {    
    nums.sort((a,b) => {return a - b});
    let maxNumb = nums[nums.length - 1];
    let step = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i];
        if (num !== maxNumb && num < maxNumb) {
            maxNumb = num;
            step++;
        }
        if (step === 3) {
            break;
        }
    }
    if (step < 3) {
        return nums[nums.length - 1];
    }
    return maxNumb;
};