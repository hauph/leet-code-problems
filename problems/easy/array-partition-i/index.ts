function arrayPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);

    let max = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (i === 0 || i % 2 === 0) {
            max += Math.min(nums[i], nums[i] + 1);
        }
    }

    return max;
};