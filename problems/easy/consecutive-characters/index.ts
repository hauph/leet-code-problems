function maxPowerTS(s: string): number {
    let prevC: string = "";
    let power: number = 1;
    let globalPower: number = 1;

    for (let i = 0; i < s.length; i++) {
        const currentC: string = s[i];
        if (i > 0) {
            if (currentC === prevC) {
                power++;
            } else {
                power = 1;
            }
            globalPower = Math.max(power, globalPower);
        }
        prevC = currentC;
    }

    return globalPower;
};