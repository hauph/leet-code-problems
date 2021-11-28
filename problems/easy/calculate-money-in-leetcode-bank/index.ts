function totalMoneyTS(n: number): number {
    let total: number = 0;
    let monday: number = 0;
    let accumulation: number = 0;
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            monday = 1;
            accumulation = monday;
        } else if (i > 0 && i % 7 === 0) {
            monday++;
            accumulation = monday;
        } else {
            accumulation++;
        }
        total += accumulation;
    }

    return total;
};