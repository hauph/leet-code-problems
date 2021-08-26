function findMaxConsecutiveOnesTS(nums: number[]): number {
    let globalMax: number = 0;
    let currentMax: number = nums.reduce((max, num, index) => {
        if (num === 1) {
            max += 1;
            if (index === nums.length - 1) {
                globalMax = Math.max(globalMax, max);
            }
        } else {
            globalMax = Math.max(globalMax, max);
            max = 0;
        }
        return max;
    }, 0)
    return globalMax;
};