/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const cloneHeights = [...heights];
    cloneHeights.sort((a, b) => a - b);
    let counter = 0;
    for (const i in heights) {
        const height = heights[i];
        for (const j in cloneHeights) {
            const expect = cloneHeights[j];
            
            if (i === j && height !== expect) {
                counter += 1;
            }
        }
    }
    return counter;
};