function xorOperationTS(n: number, start: number): number {
    let res: number = n === 1 ? start : null;
    let prevNum: number = 0;
    for (let i = 0; i < n; i++) {
        const numb: number = start + 2 * i;
        if (i === 0) {
            prevNum = numb;
        } else {
            if (res === null) {
                res = prevNum ^ numb;
            } else {
                res ^= numb;
            }
        }
    }
    return res;
};