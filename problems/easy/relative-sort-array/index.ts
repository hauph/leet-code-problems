interface Obj {
    [key: string]: number
}

function relativeSortArrayTS(arr1: number[], arr2: number[]): number[] {
    const countObj: Obj = {};
    const arr: number[] = [];
    for (let i: number = 0; i < arr1.length; i++) {
        const num: number = arr1[i];
        if (arr2.includes(num)) {
            if (!countObj[num]) {
                countObj[num] = 1;
            } else {
                arr.push(num);
            }
        } else {
            arr.push(num);
        }
    }
    arr.sort((a,b) => a - b)

    const helperRelativeSort = (index: number, subArr: number[], arrResult: number[]): void => {
        if (index >= 0 && index < subArr.length) {
            const num: number = subArr[index];
            const findIndex: number = arrResult.indexOf(num);
            if (findIndex > -1) {
                arrResult.splice(findIndex, 0, num);
            } else {
                arrResult.push(num);
            }
            helperRelativeSort(index + 1, subArr, arrResult)
        }
    }
    
    helperRelativeSort(0, arr, arr2);
    return arr2;
};