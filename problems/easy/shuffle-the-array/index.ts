function shuffleTS(nums: number[], n: number): number[] {
    const arr: number[] = [];
    for (let i = 0; i < n; i++) {
        for (let j = n; j < nums.length; j++) {
            if (i + n === j) {
                arr.push(nums[i]);
                arr.push(nums[j]);
            }
        }
    }
    return arr;
};