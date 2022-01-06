function areAlmostEqualTS(s1: string, s2: string): boolean {
    if (s1 === s2)
        return true;

    const arr: number[] = [];
    for (let i = 0; i < s1.length; i++) {
        const char1 = s1[i];
        if (s2[i] !== char1) {
            arr.push(i);
        }
    }

    if (arr.length !== 2)
        return false;

    let newString = '';
    for (let i = 0; i < s2.length; i++) {
        if (i === arr[0]) {
            newString += s1[arr[1]];
        } else if (i === arr[1]) {
            newString += s1[arr[0]];
        } else {
            newString += s2[i]
        }
    }

    return newString === s2;
};