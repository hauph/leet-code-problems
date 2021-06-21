function sumOddLengthSubarraysTS(arr: number[]): number {
    let result: number = 0;
    const helper = (start: number, end: number) => {
        if (end <= arr.length) {
            let subArr = arr.slice(start, end + 1);
            if (subArr.length % 2 !== 0) {
                result += subArr.reduce((total, currentNum) => {return total + currentNum});
            }
            helper(start, end + 2);
        }
    }
    arr.forEach((currNum: number, currIdx: number) => {
        helper(currIdx, currIdx);
    })
    return result;
};