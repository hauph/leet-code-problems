function isPrefixStringTS(s: string, words: string[]): boolean {
    let str: string = "";
    let result: boolean = false;
    words.forEach(word => {
        str += word;
        if (str === s) {
            result = true;
            return false;
        }
    })

    return result;
};