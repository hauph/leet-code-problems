function minimumDifference(nums: number[], k: number): number {
    if (nums.length === 1 && k === 1) {
        return 0;
    }

    let min = null;
    nums.sort((a, b) => a - b);
    for (let i = nums.length - 1; i >= 0; i--) {
        const m = nums[i] - nums[i - (k - 1)];
        if (min === null) {
            min = m;
        } else {
            min = min > m ? m : min;
        }
    }

    return min;
};