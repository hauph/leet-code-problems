/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const arr = [];
    
    const checker = (num, arr, result) => {
        const value = arr.find(val => val === num);
        if (!value) {
            result.push(num);
        }
        
        /* The following commented lines of code work too!! */
        // for (let i = 0; i < arr.length; i++) {
        //     const value = arr[i];
        //     if (i === arr.length - 1 && value !== num) {
        //         result.push(num);
        //     } else if (value === num) {
        //         break;
        //     }
        // }
    }
    
    for (let i = 1; i <= nums.length; i++) {
        checker(i, nums, arr);
        
        /* If you don't want to use function 'checker', the following commented lines of code work too!! */
        // const value = nums.find(val => val === i);
        // if (!value) {
        //     arr.push(i);
        // }
    }
    
    return arr;
};