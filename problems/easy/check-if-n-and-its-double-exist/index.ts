function checkIfExistTS(arr: number[]): boolean {
    let i: number = 0;
    let result: boolean = false;
    while (i < arr.length) {
        const currNum: number = arr[i];
        for (let l: number = 0; l < arr.length; l++) {
            const num: number = arr[l];
            if (i !== l && currNum * 2 === num) {
                result = true;
                break;
            }
        }
        i += 1;
        if (result) {
            break;
        }
    }
    return result;
};