function mostCommonWordTS(paragraph: string, banned: string[]): string {
    const words: string[] = paragraph.split(" ");
    const arr = words.reduce((array: string[], word: string): string[] => {
        const patt = new RegExp(/["!?',;.]+/g);
        if (patt.test(word)) {
            const _word: string = word.replace(/["!?',;.]+/g, " ");
            array = array.concat(_word.split(" "));
        } else {
            array.push(word);
        }
        return array;
    }, []);

    const obj = arr.reduce((result: object, word: string): object => {
        if (word.length) {
            let wordLowerCase: string = word.toLowerCase();
            if (!banned.includes(wordLowerCase)) {
                if (result[wordLowerCase]) {
                    result[wordLowerCase] += 1;
                } else {
                    result[wordLowerCase] = 1;
                }
            }
        }

        return result;
    }, {});

    let currMax: number = 0;
    const keys: string[] = Object.keys(obj);
    const commonWord = keys.reduce((word: string, key: string): string => {
        const val: number = obj[key];
        if (val > currMax) {
            currMax = val;
            word = key;
        }

        return word;
    }, "");

    return commonWord;
};