function reverseVowelsTS(s: string): string {
    let reverseVowels: string = "";
    let currentIndex: number = s.length - 1;
    for (let i = 0; i < s.length; i++) {
        const c: string = s[i];
        const cLowerCase: string = c.toLowerCase();
        if (
            cLowerCase !== "a" &&
            cLowerCase !== "e" &&
            cLowerCase !== "i" &&
            cLowerCase !== "o" &&
            cLowerCase !== "u"
        ) {
            reverseVowels += c;
        } else {
            for (let j = currentIndex; j >= 0; j--) {
                const v: string = s[j];
                const vLowerCase: string = v.toLowerCase();
                if (
                    vLowerCase === "a" ||
                    vLowerCase === "e" ||
                    vLowerCase === "i" ||
                    vLowerCase === "o" ||
                    vLowerCase === "u"
                ) {
                    reverseVowels += v;
                    currentIndex = j - 1;
                    break;
                }
            }
        }
    }

    return reverseVowels;
};