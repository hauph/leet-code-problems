function busyStudentTS(startTime: number[], endTime: number[], queryTime: number): number {
    let counter: number = 0;
    for (let i in startTime) {
        const statrAt: number = startTime[i];
        for (let j in endTime) {
            const endAt: number = endTime[j];
            if (i === j && statrAt <= queryTime && queryTime <= endAt) {
                counter += 1;
            }
        }
    }
    return counter;
};