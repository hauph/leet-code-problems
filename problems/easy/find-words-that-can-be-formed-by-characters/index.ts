function countCharactersTS(words: string[], chars: string): number {
    let count: number = 0;
    for (let word of words) {
        const wordArr: string[] = word.split('');
        let str: string = '';
        let cloneChars: string = chars;
        for (let char of wordArr) {
            if (cloneChars.length && cloneChars.indexOf(char) > -1) {
                str += char;
                cloneChars = cloneChars.replace(char, '');
            }
        }

        if (str === word) {
            count += str.length;
        }
    }
    return count;
};