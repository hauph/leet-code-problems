function minTimeToType(word: string): number {
    let counter = 0;
    let prevCharAt = 0;
    let clockWiseSec = 0;
    let counterClockWiseSec = 0;

    const clockWise = (target, current) => {
        if (target !== current) {
            clockWiseSec += 1;
            current = current + 1 > 25 ? 0 : current + 1;
            clockWise(target, current);
        } else {
            clockWiseSec += 1;
        }
    }

    const counterClockWise = (target, current) => {
        if (target !== current) {
            counterClockWiseSec += 1;
            current = current - 1 < 0 ? 25 : current - 1;
            counterClockWise(target, current)
        } else {
            counterClockWiseSec += 1;
        }
    }

    for (let i = 0; i < word.length; i++) {
        const c = word[i];
        const charAt = c.charCodeAt(0) - 97;

        if (!charAt && !i) {
            counter = 1;
        } else {
            clockWise(charAt, prevCharAt);
            counterClockWise(charAt, prevCharAt);
            counter += Math.min(clockWiseSec, counterClockWiseSec);
            clockWiseSec = 0;
            counterClockWiseSec = 0;
        }

        prevCharAt = charAt;
    }

    return counter;
};