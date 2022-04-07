function cellsInRange(s: string): string[] {
    const col1 = s[0];
    const charCode1 = col1.charCodeAt(0);
    const row1 = Number(s[1]);
    const col2 = s[3];
    const charCode2 = col2.charCodeAt(0);
    const row2 = Number(s[4]);
    const arr = [];

    for (let i = charCode1; i <= charCode2; i++) {
        const char = String.fromCharCode(i);

        for (let j = row1; j <= row2; j++) {
            const row = j;
            const cell = `${char}${row}`;

            if (!arr.includes(cell)) arr.push(cell);
        }
    }

    return arr;
};