function twoSumTS(nums: number[], target: number): number[] {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const num2 = target - num;
        const num2Index = nums.indexOf(num2);
        if (num2Index > -1 && num2Index !== i) {
            arr.push(i, num2Index)
            break;
        }
    }
    return arr;
};