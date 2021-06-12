/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
    return arr.filter(num => {
        if (num % 2 === 0) {
            const checker = num / 2;
            if (arr.includes(checker)) {
                return true;
            }
        }
    })
};