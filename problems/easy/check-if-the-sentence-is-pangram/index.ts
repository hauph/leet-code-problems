function checkIfPangramTS(sentence: string): boolean {
    const alphabets: string[] = [];
    const arrFromSentence: string[] = sentence.split('');
    for (let i = 0; i < arrFromSentence.length; i++) {
        const char = arrFromSentence[i];
        if (!alphabets.includes(char)) {
            alphabets.push(char);
        }
    }

    return alphabets.length >= 26;
};