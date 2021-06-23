/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const obj = {};
    for (const num of nums) {
        if(!obj[num]) {
            obj[num] = 1;
        } else {
            obj[num]++;
        }
    }
    
    let result = 0;
    let highestNum = 0;
    for (const key of Object.keys(obj)) {
        if (obj[key] > highestNum) {
            result = key;
            highestNum = obj[key];
        }
    }
    
    return result;
};