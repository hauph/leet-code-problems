function findDisappearedNumbersTS(nums: number[]): number[] {
    const arr: number[] = [];
    
    const checker = (num: number, arr: number[], result: number[]): void => {
        const value: number = arr.find(val => val === num);
        if (!value) {
            result.push(num);
        }
    }
    
    for (let i = 1; i <= nums.length; i++) {
        checker(i, nums, arr);
    }
    
    return arr;
};