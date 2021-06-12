/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
    let counter = 0;
    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        for (let j = 0; j < row.length; j++) {
            const num = row[j];
            if (num < 0) {
                counter += 1;
            }
        }
    }
    return counter;
};