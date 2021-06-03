function largestAltitudeTS(gain: number[]): number {
    let currentAl: number = 0;
    let highestAl: number = 0;
    for (let i: number = 0; i < gain.length; i++) {
        const value: number = gain[i];
        currentAl += value;
        if (highestAl < currentAl) {
            highestAl = currentAl;
        }
    }

    return highestAl;
};