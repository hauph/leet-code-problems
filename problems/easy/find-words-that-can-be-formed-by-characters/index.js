/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const wordArr = word.split('');
        let str = '';
        let cloneChars = chars;
        for (let j = 0; j < wordArr.length; j++) {
            const char = wordArr[j];
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