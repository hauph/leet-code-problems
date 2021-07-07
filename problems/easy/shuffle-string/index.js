/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const sArr = s.split('');
    const arr = [];
    return sArr.reduce((str, char, index) => {
        indices.forEach((item, i) => {
            if (index === i) {
                arr[item] = char;
            }
        })
        if (index === s.length - 1) {
            str = arr.join('');
        }
        return str;
    }, '');
};