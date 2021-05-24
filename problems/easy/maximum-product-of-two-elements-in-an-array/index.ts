function maxProductTS(nums: number[]): number {
    const findMaxNumb = (arr: number[]): number => {
        let numb: number = arr[0];
        for (let i= 1; i < arr.length; i++) {
            if (numb < arr[i]) {
                numb = arr[i];
            }
        }
        return numb;
    };
    
    const number1: number = findMaxNumb(nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === number1) {
            nums.splice(i, 1);
            break;
        }
    }
    const number2: number = findMaxNumb(nums);
    
    return (number1 - 1) * (number2 - 1);
};