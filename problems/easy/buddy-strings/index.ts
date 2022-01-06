function buddyStringsTS(s: string, goal: string): boolean {
    let result = false;
    if (s === goal) {
        function swapper(index: number): void {
            if (index < s.length) {
                for (let i = 0; i < s.length; i++) {
                    if (i !== index) {
                        const sArr = s.split("");
                        sArr[i] = s[index];
                        sArr[index] = s[i];
                        if (sArr.join("") === goal) {
                            result = true;
                            break;
                        }
                    }
                }

                if (!result) swapper(index + 1);
            }
        }

        swapper(0);
    } else {
        let pos: number = null;
        let newString = [];
        for (let i = 0; i < s.length; i++) {
            const char1 = s[i];
            if (goal[i] !== char1) {
                if (pos === null) {
                    pos = i;
                } else {
                    if (goal[pos] === s[i] && goal[i] === s[pos]) {
                        newString[pos] = s[i];
                        newString[i] = s[pos];
                    }
                }
            } else {
                newString[i] = char1;
            }
        }

        result = newString.join("") === goal;
    }

    return result;
};