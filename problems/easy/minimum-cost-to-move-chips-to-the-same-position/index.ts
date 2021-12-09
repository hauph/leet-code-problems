function minCostToMoveChipsTS(position: number[]): number {
    let totalOdd: number = 0;
    let totalEven: number = 0;
    position.forEach((pos: number): void => {
        if (pos % 2 === 0) {
            totalEven++;
        } else {
            totalOdd++;
        }
    });
    return Math.min(totalOdd, totalEven);
};