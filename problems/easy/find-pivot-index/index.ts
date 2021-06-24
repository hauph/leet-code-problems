function pivotIndexTS(nums: number[]): number {
    return nums.reduce((res: number, currNum: number, index: number, arr: number[]): number => {
        let left: number = index === 0 ? 0 : nums.reduce((total: number, num: number, idx: number): number => {
            if (idx < index) {
                total += num;
            }
            return total;
        }, 0);
        
        let right: number = index === nums.length - 1 ? 0 : nums.reduce((total: number, num: number, idx: number): number => {
            if (idx > index) {
                total += num;
            }
            return total;
        }, 0);
        
        if (left === right && res !== index) {
            res = index;
            arr.splice(1);
        }
        
        return res;
    }, -1);
};