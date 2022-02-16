function nearestValidPoint(x: number, y: number, points: number[][]): number {
    let smallestDistance = null;
    let index = points.reduce((currI, coordinate, i) => {
        const coorX = coordinate[0];
        const coorY = coordinate[1];
        if (coorX === x || coorY === y) {
            const distance = Math.abs(x - coorX) + Math.abs(y - coorY);
            if (smallestDistance === null || (smallestDistance !== null && smallestDistance > distance)) {
                smallestDistance = distance;
                currI = i;
            }
        }
        return currI;
    }, -1);

    return index;
};