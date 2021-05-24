function isHappyTS(n: number): boolean {
    if (n === 1) {
        return true;
    } else if (n === 0) {
        return false;
    } else {
        let total: number = n;
        const c: boolean[] = [];
        while (total > 1 && c[total] !== true) {
            c[total] = true;
            let arr: any = total.toString().split('');
            arr = arr.map(num => Math.pow(Number(num), 2));
            total = arr.reduce((a: number, b: number): number => a + b, 0);
        }

        return total === 1;
    }
};