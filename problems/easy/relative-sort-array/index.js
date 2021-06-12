/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    const countObj = {};
    const arr = [];
    for (let i = 0; i < arr1.length; i++) {
        const num = arr1[i];
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

    const helperRelativeSort = (index, subArr, arrResult) => {
        if (index >= 0 && index < subArr.length) {
            const num = subArr[index];
            const findIndex = arrResult.indexOf(num);
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
    
    /* Second solution */
    // const subArr1 = [];
    // const subArr2 = [];
    // for (let i = 0; i < arr2.length; i++) {
    //     const arr2Num = arr2[i];
    //     for (let l = 0; l < arr1.length; l++) {
    //         const arr1Num = arr1[l];
    //         if (arr1Num === arr2Num) {
    //             subArr1.push(arr1Num)
    //         } 
    //     }
    // }
    
    // for (let i = 0; i < arr1.length; i++) {
    //     const num = arr1[i];
    //     if (!arr2.includes(num)) {
    //         subArr2.push(num);
    //     }
    // }
    // subArr2.sort((a, b) => a - b);
    
    // return subArr1.concat(subArr2);
};