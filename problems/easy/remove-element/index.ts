function removeElementTS(nums: number[], val: number): number {
    const foundIdx: number = nums.indexOf(val);
    if (foundIdx > -1) {
        nums.splice(foundIdx, 1);
        removeElementTS(nums, val);
    } else {
        return nums.length;
    }
};