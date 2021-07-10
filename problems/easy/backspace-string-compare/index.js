/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const arrS = s.split('').reduce((arr, item, index) => {
        if (item !== "#") {
            arr.push(item);
        } else if (item === '#' && arr.length) {
            arr.splice(arr.length - 1, 1);
        }
        return arr;
    }, []);
    const arrT = t.split('').reduce((arr, item, index) => {
        if (item !== "#") {
            arr.push(item);
        } else if (item === '#' && arr.length) {
            arr.splice(arr.length - 1, 1);
        }
        return arr;
    }, []);
    return arrS.join('') === arrT.join('');
};