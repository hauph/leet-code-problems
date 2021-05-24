function searchInsertTS(nums: number[], target: number): number {
    const index: number = nums.indexOf(target);
    if (index !== -1) {
        return index;
    } else {
        let result: number;
        for (let i = nums.length - 1; i >= 0; i--) {
            const num: number = nums[i];
            if (num < target) {
                result = i + 1;
                break;
            }
            if (i === 0) {
                result = 0
            }
        }
        return result;
    }
};