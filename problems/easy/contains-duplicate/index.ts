function containsDuplicateTS(nums: number[]): boolean {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (arr.indexOf(num) === -1) {
            arr.push(num);
        }
    }
    
    return arr.length !== nums.length
};