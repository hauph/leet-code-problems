type Obj = {
    [key: string]: number
}

function majorityElementTS(nums: number[]): number {
    const obj: Obj = {};
    for (const num of nums) {
        if(!obj[num]) {
            obj[num] = 1;
        } else {
            obj[num]++;
        }
    }
    
    let result: number = 0;
    let highestNum: number = 0;
    for (const key of Object.keys(obj)) {
        if (obj[key] > highestNum) {
            result = Number(key);
            highestNum = obj[key];
        }
    }
    
    return result;
};