function containsDuplicateTS(nums: number[]): boolean {
    const arr: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const num: number = nums[i];
        if (arr.indexOf(num) === -1) {
            arr.push(num);
        }
    }
    
    return arr.length !== nums.length
};