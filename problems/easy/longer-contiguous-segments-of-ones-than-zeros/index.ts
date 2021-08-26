function checkZeroOnesTS(s: string): boolean {
    const findMaxConsecutive = (base: number): number => {
        let currentMax = 0;
        let globalMax = 0;
        for (let i = 0; i < s.length; i++) {
            const num = Number(s[i]);
            if (num === base) {
                currentMax += 1;
                if (i === s.length - 1) {
                    globalMax = Math.max(globalMax, currentMax);
                }
            } else {
                globalMax = Math.max(globalMax, currentMax);
                currentMax = 0;
            }
        }
        return globalMax;
    };

    const longestOne = findMaxConsecutive(1);
    const longestZero = findMaxConsecutive(0);

    return longestOne > longestZero;
};
