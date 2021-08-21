type Obj = {
    [key: string]: number
}

function findShortestSubArrayTS(nums: number[]): number {
    let degree: number = 1;
    const obj: Obj = nums.reduce((object, num) => {
        if (!object[num]) {
            object[num] = 1;
        } else {
            object[num] += 1;
            if (degree < object[num]) {
                degree = object[num];
            } 
        }   
        return object;
    }, {});

    let length: number = 0;
    for (let key in obj) {
        const val: number = obj[key];
        if (val === degree) {
            const num: number = Number(key);
            const start: number = nums.indexOf(num);
            const end: number = nums.lastIndexOf(num);
            const subArr: number[] = nums.slice(start, end + 1);
            if (!length || subArr.length < length) {
                length = subArr.length;
            }
        }
    }
    
    return length;
};