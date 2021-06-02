/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let currentAl = 0;
    let highestAl = 0;
    for (let i = 0; i < gain.length; i++) {
        const value = gain[i];
        currentAl += value;
        if (highestAl < currentAl) {
            highestAl = currentAl;
        }
    }

    return highestAl;
};