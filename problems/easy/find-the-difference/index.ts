function findTheDifference(s: string, t: string): string {
    const obj = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (!obj[char]) {
            obj[char] = 1;
        } else {
            obj[char] += 1;
        }
    }

    let res = '';

    for (let i = 0; i < t.length; i++) {
        const char = t[i];

        if (!obj[char]) {
            res = char;
            break;
        } else {
            if (obj[char] > 0) {
                obj[char] -= 1;
            } else {
                res = char;
                break;
            }
        }
    }

    return res;
};