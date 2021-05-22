/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    const splitS = s.split(' ');
    const fiteredArr = splitS.filter(item => {
        if (item !== '') {
            return item
        }
    })
    if (fiteredArr.length === 0) {
        return 0;
    }
    return fiteredArr[fiteredArr.length - 1].length
};