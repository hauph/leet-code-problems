/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let s = start < destination ? start : destination;
    let d = start > destination ? start : destination;
    let d1 = 0;
    let d2 = 0;
    for (let i = 0; i < distance.length; i++) {
        const num = distance[i];
        if (i >= s && i < d) {
            d1 += num;
        } else {
            d2 += num;
        }
    }
    return Math.min(d1, d2);
};