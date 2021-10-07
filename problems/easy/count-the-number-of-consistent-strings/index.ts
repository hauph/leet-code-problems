function countConsistentStringsTS(allowed: string, words: string[]): number {
    let res: number = 0;
    for (let i = 0; i < words.length; i++) {
        const word: string = words[i];
        let counter: number = 0;
        for (let j = 0; j < word.length; j++) {
            const c: string = word[j];
            if (allowed.includes(c)) {
                counter += 1;
            } else {
                break;
            }
        }
        if (counter === word.length) {
            res += 1;
        }
    }
    return res;
};