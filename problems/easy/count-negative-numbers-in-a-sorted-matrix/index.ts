function countNegativesTS(grid: number[][]): number {
    let counter: number = 0;
    for (let i: number = 0; i < grid.length; i++) {
        const row: number[] = grid[i];
        for (let j: number = 0; j < row.length; j++) {
            const num: number = row[j];
            if (num < 0) {
                counter += 1;
            }
        }
    }
    return counter;
};