/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
    let i = 0;
    let result = false;
    while (i < arr.length) {
        const currNum = arr[i];
        for (let l = 0; l < arr.length; l++) {
            const num = arr[l];
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