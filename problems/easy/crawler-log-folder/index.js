/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    return logs.reduce((step, item, index) => {
        if (item.match(/^\.\//g)) {
            step += 0;
        } else if (item.match(/^\.\.\//g)) {
            step -= 1;
        } else {
            step += 1;
        }
        return step < 0 ? 0 : step;
    }, 0)
};