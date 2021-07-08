function minOperationsTS(logs: string[]): number {
    return logs.reduce((step: number, item: string, index: number): number => {
        if (item.match(/^\.\//g)) {
            step += 0;
        } else if (item.match(/^\.\.\//g)) {
            step -= 1;
        } else {
            step += 1;
        }
        return step < 0 ? 0 : step;
    }, 0)
};