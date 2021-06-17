interface Obj {
    [key: string]: number
}

function createTargetArrayTS(nums: number[], index: number[]): number[] {
    const arr: number[] = [];
    const obj: Obj = {};
    let i: number = 0;
    for (let j: number = 0; j < index.length; j++) {
        const k: number = index[j];
        if (!obj[k]) {
            if (arr[k]) {
                arr.splice(k, 0, nums[i]);
            } else {
                arr[k] = nums[i];
            }
            obj[k] = 1;
        } else {
            arr.splice(k, 0, nums[i]);
        }
        i += 1;
    }
    return arr;
};