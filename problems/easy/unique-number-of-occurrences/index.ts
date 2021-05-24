interface Obj {
    [item: number]: number
}

function uniqueOccurrencesTS(arr: number[]): boolean {
    const obj: Obj = {};
    for (let i = 0; i < arr.length; i++) {
        const item: number = arr[i];
        if (obj[item] === undefined) {
            obj[item] = 0;
        } else {
            obj[item] += 1;
        }
    }
    const arrVal: number[] = [];
    const arrKey: string[] = [];
    for (let item in obj) {
        arrKey.push(item);
        const value: number = obj[item];
        if (arrVal.indexOf(value) === -1) {
            arrVal.push(value);
        }
    }
    
    return arrVal.length === arrKey.length;
};