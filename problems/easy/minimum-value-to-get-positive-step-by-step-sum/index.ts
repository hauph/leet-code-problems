function minStartValueTS(nums: number[]): number {
    let startValue: number = 1;
    let bool: boolean = true;
    let arr: number[] = [];
    while (bool) {
        let result: number = 0;
        for (let i = 0; i < nums.length; i++) {
            const num: number = nums[i];
            if (i === 0) {
                result = startValue + num;
            } else {
                result += nums[i];
            }
            if (result >= 1) {
                arr.push(result);
            }
        }

        if (arr.length < nums.length) {
            startValue += 1;
            arr.length = 0;
        } else {
            bool = false;
        }
    }
    return startValue;
};