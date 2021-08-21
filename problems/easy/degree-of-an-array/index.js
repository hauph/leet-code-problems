/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const obj = nums.reduce((object, num) => {
        if (!object[num]) {
            object[num] = 1;
        } else {
            object[num] += 1;
        }   
        return object;
    }, {});

    const keys = Object.keys(obj);
    let degree = 0;
    keys.forEach(key => {
        const val = obj[key];
        if (val > degree) {
            degree = val;
        }
    });
    
    let length = 0;
    keys.forEach(function(key) {
        const val = obj[key];
        if (val === degree) {
            const num = Number(key);
            const start = nums.indexOf(num);
            const end = nums.lastIndexOf(num);
            const subArr = nums.slice(start, end + 1);
            if (!length || subArr.length < length) {
                length = subArr.length;
            }
        }
    });
    
    return length;
};