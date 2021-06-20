/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let counter = 0;
    const helper = (index) => {
        if (index < nums.length) {
            const currentNum = nums[index];
            for (const i in nums) {
                const num = nums[i]; {
                    if (index !== i && currentNum === num && index < i) {
                        counter += 1;
                    }
                }
            }
            helper(index + 1);
        }
    };
    helper(0);
    return counter;
};