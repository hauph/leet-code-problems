function isMonotonicTS(nums: number[]): boolean {
    let increasing: number = 0;
    let decreasing: number = 0;

    for (let i: number = 0; i < nums.length - 1; i++) {
        if (nums[i] - nums[i + 1] < 0) {
            increasing += 1;
        } else if (nums[i] - nums[i + 1] > 0) {
            decreasing += 1;
        } else if (nums[i] - nums[i + 1] === 0) {
            increasing += 1;
            decreasing += 1;
        }
    }

    if (increasing === nums.length - 1 || decreasing === nums.length - 1) {
        return true;
    }
    
    return false;
};