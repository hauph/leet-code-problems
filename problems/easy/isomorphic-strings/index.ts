function isIsomorphic(s: string, t: string): boolean {
    const patternFactory = string => {
        const obj = {};
        let response = '';

        for (let i = 0; i < string.length; i++) {
            const char = string[i];

            if (!obj[char]) {
                obj[char] = `${i.toString()}-`;
                response += `${i.toString()}-`;
            } else {
                response += obj[char];
            }
        }

        return response;
    }

    const patternS = patternFactory(s);
    const patternT = patternFactory(t);

    return patternS === patternT;
};