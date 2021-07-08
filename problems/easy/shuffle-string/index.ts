function restoreStringTS(s: string, indices: number[]): string {
    const sArr: string[] = s.split('');
    const arr: string[] = [];
    return sArr.reduce((str: string, char: string, index: number): string => {
        indices.forEach((item, i) => {
            if (index === i) {
                arr[item] = char;
            }
        })
        if (index === s.length - 1) {
            str = arr.join('');
        }
        return str;
    }, '');
};