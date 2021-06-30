/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const result = [];
    const helper = (index) => {
        if (index < arr.length) {
            let highest = arr[index] === result[result.length - 1] ? 0 : arr[index];
            for (let i = index + 1; i < arr.length; i++) {
                const currNum = arr[i];
                if (highest < currNum) {
                    highest = currNum;
                }
            }
            if (index < arr.length - 1) {
                result.push(highest);
            } else if (index === arr.length - 1) {
                result.push(-1);
            }
            helper(index + 1);
        }
    };
    helper(0);
    return result;
};