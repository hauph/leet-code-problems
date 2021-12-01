function halvesAreAlikeTS(s: string): boolean {
    const halfIndex: number = s.length / 2 - 1;
    let totalVowel1: number = 0;
    let totalVowel2: number = 0;
    for (let i = 0; i < s.length; i++) {
        const c: string = s[i].toLowerCase();
        if (i <= halfIndex) {
            switch (c) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    totalVowel1++;
                    break;
            }

        } else if (i > halfIndex) {
            switch (c) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    totalVowel2++;
                    break;
            }
        }
    }
    return totalVowel1 === totalVowel2;
}
