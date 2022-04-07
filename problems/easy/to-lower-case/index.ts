function toLowerCase(s: string): string {
    let res = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const charCode = char.charCodeAt(0);

        if (charCode >= 65 && charCode <= 90) {
            const lowerCaseChar = String.fromCharCode(charCode + 32);
            res += lowerCaseChar;
        } else {
            res += char;
        }
    }

    return res;
};

