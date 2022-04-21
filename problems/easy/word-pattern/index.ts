function wordPatternTS(pattern: string, s: string): boolean {
    const obj1 = {};
    let str1 = '';

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];

        if (!obj1[char]) {
            obj1[char] = `${i}_`;
            str1 += obj1[char];
        } else {
            str1 += obj1[char];
        }
    }

    const arrFromS = s.split(' ');
    const obj2 = {};
    let str2 = '';

    for (let i = 0; i < arrFromS.length; i++) {
        const char = arrFromS[i];

        if (!obj2[char]) {
            obj2[char] = `${i}_`;
            str2 += obj2[char];
        } else {
            str2 += obj2[char];
        }
    }

    return str1 === str2;
};