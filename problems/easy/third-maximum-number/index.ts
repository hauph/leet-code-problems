function thirdMaxTS(nums: number[]): number {
    nums.sort((a,b) => {return a - b});
    let maxNumb: number = nums[nums.length - 1];
    let step: number = 1;
    for (let i: number = nums.length - 1; i >= 0; i--) {
        const num: number = nums[i];
        if (num !== maxNumb && num < maxNumb) {
            maxNumb = num;
            step++;
        }
        if (step === 3) {
            break;
        }
    }
    if (step < 3) {
        return nums[nums.length - 1];
    }
    return maxNumb;
};