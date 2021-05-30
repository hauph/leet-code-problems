function decompressRLElistTS(nums: number[]): number[] {
    let arr: number[] = [];
    const arrLength: number = nums.length;
    if (arrLength === 2) {
        const val: number = nums[1];
        const subArr: number[] = [];
        let freq: number = nums[0];
        while (freq > 0) {
            subArr.push(val);
            freq -= 1;
        }
        arr = subArr;
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (i % 2 != 0) {
                const val: number = nums[i];
                const subArr: number[] = [];
                let freq: number = nums[i - 1];
                while (freq > 0) {
                    subArr.push(val);
                    freq -= 1;
                }
                if (!arr.length) {
                    arr = subArr;
                } else {
                    arr = arr.concat(subArr);
                }
            }
        }
    }
    
    return arr;
};