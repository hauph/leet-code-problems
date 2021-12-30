function largestOddNumberTS(num: string): string {
    let subString = '';

    for (let i = num.length - 1; i >= 0; i--) {
        const numb = Number(num[i]);
        const isOdd = numb % 2 !== 0;
        if (isOdd) {
            subString = num.substring(0, i + 1);
            break;
        }
    }

    return subString;
};