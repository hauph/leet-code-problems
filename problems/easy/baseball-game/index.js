/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    const arr = ops.reduce((_arr, op, index) => {
        const length = _arr.length;
        let newScore;
        if (Number(op) / 1 === Number(op)) {
            newScore = Number(op);
        } else if (op === '+') {
            newScore = _arr[length - 1] + _arr[length - 2];
        } else if (op === 'D') {
            newScore = _arr[length - 1] * 2;
        } else {
            _arr.splice(length - 1, 1);
        }
        
        if (newScore !== undefined) {
            _arr.push(newScore);
        }
        
        return _arr;
    }, []);
    
    return arr.reduce((total, num) => total + num);
};