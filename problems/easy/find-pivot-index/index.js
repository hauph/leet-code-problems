/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {    
    return nums.reduce((res, currNum, index, arr) => {
        let left = index === 0 ? 0 : nums.reduce((total, num, idx) => {
            if (idx < index) {
                total += num;
            }
            return total;
        }, 0);
        
        let right = index === nums.length - 1 ? 0 : nums.reduce((total, num, idx) => {
            if (idx > index) {
                total += num;
            }
            return total;
        }, 0);
        
        if (left === right && res !== index) {
            res = index;
            arr.splice(1);
        }
        
        return res;
    }, -1);
};