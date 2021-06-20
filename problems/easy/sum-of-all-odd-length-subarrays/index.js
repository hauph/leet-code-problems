/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let counter = 0;
    const makeSubArr = (index, cloneMarker) => {
        if (cloneMarker >= 1) {
            let subArr = arr.slice(index, cloneMarker);
            if (subArr.length % 2 !== 0) {
                subArr.forEach(num => {
                    counter += num;
                });
            }
            makeSubArr(index, cloneMarker - 1);
        }
    };
    const helper = (index) => {
        if (index < arr.length) {
            let cloneMarker = arr.length; 
            makeSubArr(index, cloneMarker);
            helper(index + 1);
        }
    };
    helper(0);
    return counter;
};