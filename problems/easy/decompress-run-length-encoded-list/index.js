/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var decompressRLElist = function(nums) {
    let arr = [];
    const arrLength = nums.length;
    if (arrLength === 2) {
        const val = nums[1];
        const subArr = [];
        let freq = nums[0];
        while (freq > 0) {
            subArr.push(val);
            freq -= 1;
        }
        arr = subArr;
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (i % 2 != 0) {
                const val = nums[i];
                const subArr = [];
                let freq = nums[i - 1];
                while (freq > 0) {
                    subArr.push(val);
                    freq -= 1;
                }
                if (!arr.length) {
                    arr = subArr;
                } else {
                    arr = arr.concat(subArr);
                }
            }
        }
    }
    
    return arr;
};