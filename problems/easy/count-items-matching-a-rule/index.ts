function countMatchesTS(items: string[][], ruleKey: string, ruleValue: string): number {
    const res = items.reduce((result, item) => {
        let index: number = 0;
        switch (ruleKey) {
            case 'name':
                index = 2;
                break;
            case 'color':
                index = 1;
                break;
            default:
            // nothing here
        }

        if (item[index] === ruleValue) {
            result++
        };

        return result;
    }, 0);

    return res;
};