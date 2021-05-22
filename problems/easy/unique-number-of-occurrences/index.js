/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (obj[item] === undefined) {
            obj[item] = 0;
        } else {
            obj[item] += 1;
        }
    }
    const arrVal = [];
    const arrKey = [];
    for (item in obj) {
        arrKey.push(item);
        const value = obj[item];
        if (arrVal.indexOf(value) === -1) {
            arrVal.push(value);
        }
    }
    
    return arrVal.length === arrKey.length
};