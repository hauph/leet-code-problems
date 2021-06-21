function numIdenticalPairsTS(nums: number[]): number {
    let counter: number = 0;
    const helper = (index: number): void => {
        if (index < nums.length) {
            const currentNum: number = nums[index];
            for (const i in nums) {
                const num: number = nums[i]; {
                    if (currentNum === num && index < Number(i)) {
                        counter += 1;
                    }
                }
            }
            helper(index + 1);
        }
    };
    helper(0);
    return counter;
};