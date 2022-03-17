function checkString(s: string): boolean {
    let result = true;
    let prevC = s[0];

    for (let i = 1; i < s.length; i++) {
        const c = s[i];
        if (prevC === 'b' && c === 'a') {
            result = false;
            break;
        }
        prevC = c;
    }

    return result;
};