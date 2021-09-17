function reverseStrTS(s: string, k: number): string {
    const kX2: number = 2 * k;
    let currentPos: number = 0;
    let string: string = "";

    const stringFactory = (str: string): string => {
        const subString: string = str.substr(0, k);
        const reversedStr: string = subString.split("").reverse().join("");
        const patt = new RegExp(`^([a-z]){${k}}`);
        return str.replace(patt, reversedStr);
    };

    for (let i = 0; i < s.length; i++) {
        if (i > 0 && (i + 1) % kX2 === 0) {
            const subStr: string = s.substr(currentPos, kX2);
            string += stringFactory(subStr);
            currentPos = i + 1;
        }

        if (i === s.length - 1) {
            const str: string = s.substr(currentPos, kX2);
            if (str.length >= k && str.length < kX2) {
                string += stringFactory(str);
            } else if (str.length < k) {
                string += str.split("").reverse().join("");
            }
        }
    }

    return string;
};