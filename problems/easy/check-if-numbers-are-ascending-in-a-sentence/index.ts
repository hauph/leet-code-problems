function areNumbersAscendingTS(s: string): boolean {
    const sArr = s.split(' ');
    let prevNumb = null;
    const result = sArr.reduce((res, word) => {
        const numb = parseInt(word);

        if (numb / 1 >= 0) {
            if (prevNumb === null) {
                prevNumb = numb;
            } else {
                if (prevNumb < numb) {
                    prevNumb = numb;
                } else {
                    res = false;
                }
            }
        }

        return res;
    }, true);

    return result;
};