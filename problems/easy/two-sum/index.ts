function twoSumTS(nums: number[], target: number): number[] {
    const arr: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const num: number = nums[i];
        const num2: number = target - num;
        const num2Index: number = nums.indexOf(num2);
        if (num2Index > -1 && num2Index !== i) {
            arr.push(i, num2Index)
            break;
        }
    }
    return arr;
};