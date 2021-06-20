/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const cloneNum = [...nums];
    cloneNum.sort((a, b) => a - b);
    let currentNum;
    let obj = {};
    let counter = 0;
    let plus = 1;
    cloneNum.forEach((num, index) => {
        if (currentNum !== undefined && currentNum !== num) {
            counter += plus;
            plus = 1;
        } else if (currentNum !== undefined && currentNum === num) {
            plus += 1;
        }
        currentNum = num;
        obj[num] = counter;
    });
    
    return nums.map((num) => {
        return obj[num.toString()];
    });
};