function distanceBetweenBusStopsTS(distance: number[], start: number, destination: number): number {
    let s: number = start < destination ? start : destination;
    let d: number = start > destination ? start : destination;
    let d1: number = 0;
    let d2: number = 0;
    for (let i = 0; i < distance.length; i++) {
        const num: number = distance[i];
        if (i >= s && i < d) {
            d1 += num;
        } else {
            d2 += num;
        }
    }
    return Math.min(d1, d2);
};