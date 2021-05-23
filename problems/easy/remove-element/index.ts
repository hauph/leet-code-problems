function removeElementTS(nums: number[], val: number): number {
    const foundIdx = nums.indexOf(val);
    if (foundIdx > -1) {
        nums.splice(foundIdx, 1);
        removeElement(nums, val);
    } else {
        return nums.length;
    }
};