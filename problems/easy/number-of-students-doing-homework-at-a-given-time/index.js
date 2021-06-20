/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
 var busyStudent = function(startTime, endTime, queryTime) {
    let counter = 0;
    for (let i = 0; i < startTime.length; i++) {
        const statrAt = startTime[i];
        for (let j = 0; j < endTime.length; j++) {
            const endAt = endTime[j];
            if (i === j && statrAt <= queryTime && queryTime <= endAt) {
                counter += 1;
            }
        }
    }
    
    /* Another solution using for...in */
    // for (let i in startTime) {
    //     const statrAt = startTime[i];
    //     for (let j in endTime) {
    //         const endAt = endTime[j];
    //         if (i === j && statrAt <= queryTime && queryTime <= endAt) {
    //             counter += 1;
    //         }
    //     }
    // }
    return counter;
};