function heightCheckerTS(heights: number[]): number {
    const cloneHeights: number[] = [...heights];
    cloneHeights.sort((a, b) => a - b);
    let counter: number = 0;
    for (const i in heights) {
        const height: number = heights[i];
        for (const j in cloneHeights) {
            const expect: number = cloneHeights[j];
            
            if (i === j && height !== expect) {
                counter += 1;
            }
        }
    }
    return counter;
};