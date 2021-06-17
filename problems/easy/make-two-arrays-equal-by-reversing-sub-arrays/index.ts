function canBeEqualTS(target: number[], arr: number[]): boolean {
    if (target.length !== arr.length) {
        return false;
    }
    
    target.sort((a,b) => a-b);
    arr.sort((a,b) => a-b);
    let result: boolean = true;
    for (let i: number = 0; i < target.length; i++) {
        for (let j: number = 0; j < arr.length; j++) {
            if (target[i] !== arr[j] && i === j) {
                result = false;
            }
        }
    }
    return result;
};