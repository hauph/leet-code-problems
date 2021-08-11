/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const arr = [];
    
    for (let i = 0; i <= n; i++) {
        switch (i) {
            case 0:
                arr.push(0);
                break;
            case 1:
            case 2:
                arr.push(1);
                break;
            default:
                arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
        }
    }
    
    return arr[arr.length - 1];
};