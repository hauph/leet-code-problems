function selfDividingNumbersTS(left: number, right: number): number[] {
    const result = [];
    for (let i = left; i <= right; i++) {
        let num;
        const arr = i.toString().split('');
        if (arr.length === 1) {
            num = Number(arr[0]);
            if (num % num === 0) {
                result.push(i); 
            }
        } else {
            let shouldPush = true;
            for (let l = 0; l < arr.length; l++) {
                num = Number(arr[l]);
                if (i % num !== 0) {
                    shouldPush = false;
                    break;
                }
            }
            if (shouldPush) {
                result.push(i);
            }
        }     
    } 
    return result;
};