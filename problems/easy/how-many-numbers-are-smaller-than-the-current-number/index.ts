type Obj = {
    [key: string]: number
}

function smallerNumbersThanCurrentTS(nums: number[]): number[] {
    const cloneNum: number[] = [...nums];
    cloneNum.sort((a, b) => a - b);
    let currentNum: number;
    let obj: Obj = {};
    let counter: number = 0;
    let plus: number = 1;
    cloneNum.forEach((num, index) => {
        if (currentNum !== undefined && currentNum !== num) {
            counter += plus;
            plus = 1;
        } else if (currentNum !== undefined && currentNum === num) {
            plus += 1;
        }
        currentNum = num;
        obj[num] = counter;
    });
    
    return nums.map((num) => {
        return obj[num.toString()];
    });
};