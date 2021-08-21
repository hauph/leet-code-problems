function maxSubArrayTS(nums: number[]): number {
    let currMax: number = nums[0];
    const result: number = nums.reduce((max, num, index) => {
        if (index > 0) {
            currMax = currMax + num < num ? num : currMax + num;
            max = currMax > max ? currMax : max;
        }

        return max;
    }, nums[0]);
    
    return result;
};