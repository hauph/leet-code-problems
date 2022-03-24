/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let start = 1;
    let result = 0;

    while (start <= n) {
        const middle = Math.floor((start + n) / 2);
        const guessVal = guess(middle);

        if (guessVal === 0) {
            result = middle;
            break;
        } else if (guessVal < 0) {
            n = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return result;
};