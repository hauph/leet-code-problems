function findGCDTS(nums: number[]): number {
    const sortedArr: number[] = nums.sort((a, b) => a - b);
    const max = sortedArr[sortedArr.length - 1];

    let res = 1;
    for (let i = max; i > 0; i--) {
        if (sortedArr[0] % i === 0 && max % i === 0) {
            res = i;
            break;
        }
    }

    return res;
};