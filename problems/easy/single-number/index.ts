function singleNumber(nums: number[]): number {
    let res = null;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const newNums = nums.filter(n => n === num);

        if (newNums.length === 1) {
            res = num;
            break;
        }
    }

    return res;
};