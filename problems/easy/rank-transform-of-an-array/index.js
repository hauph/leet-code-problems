/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const cloneArr = [...arr];
    cloneArr.sort((a, b) => a - b);
    let currentNum;
    let rank = 0;
    const obj = {};
    cloneArr.forEach((num, index) => {
        if (currentNum === undefined) {
            rank = 1;
        } else if (currentNum !== undefined && currentNum !== num){
            rank += 1;
        }
        currentNum = num;
        obj[num] = rank;
    });

    return arr.map((num) => {
        return obj[num.toString()];
    })
};