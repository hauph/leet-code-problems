function detectCapitalUseTS(word: string): boolean {
    const lowerWord: string = word.toLowerCase();
    if (lowerWord === word) return true;
    const indexArr: number[] = [];
    for (let i = 0; i < word.length; i++) {
        const c1: string = word[i];
        for (let j = 0; j < lowerWord.length; j++) {
            const c2: string = lowerWord[j];
            if (i === j && c1 !== c2) {
                indexArr.push(i);
            }
        }
    }

    const res: boolean = (indexArr.length === 1 && indexArr[0] === 0) || (indexArr.length === word.length) ? true : false;

    return res;
};