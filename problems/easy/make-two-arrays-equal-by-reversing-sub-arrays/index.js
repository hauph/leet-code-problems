/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    if (target.length !== arr.length) {
        return false;
    }
    
    target.sort((a,b) => a-b);
    arr.sort((a,b) => a-b);
    let result = true;
    for (let i = 0; i < target.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (target[i] !== arr[j] && i === j) {
                result = false;
            }
        }
    }
    return result;
};