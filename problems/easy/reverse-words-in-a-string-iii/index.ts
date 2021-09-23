function reverseWordsTS(s: string): string {
    const arr: string[] = [];
    let result: string = '';
    for (let i = 0; i < s.length; i++) {
        const c: string = s[i];
        if (c === ' ' || i === s.length - 1) {
            if (i === s.length - 1) {
                arr.push(c);
            }
            result += `${arr.reverse().join('')}${i < s.length - 1 ? ' ' : ''}`;
            arr.length = 0;
        } else {
            arr.push(c);
        }
    }
    return result;
};