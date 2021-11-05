function longestCommonPrefixTS(strs: string[]): string {
    let res: string = '';
    const firstWord: string = strs[0];
    const helper = (start: number, end: number): void => {
        if (end <= firstWord.length) {
            const temp: string = firstWord.substr(start, end);
            const patt = new RegExp(`^(${temp})`, 'g');

            let isOkay: boolean = true;
            for (let i = 0; i < strs.length; i++) {
                const str: string = strs[i];
                if (str.match(patt) === null) {
                    isOkay = false;
                }

                if (i === strs.length - 1) {
                    if (isOkay) {
                        res = temp.length > res.length ? temp : res;
                        helper(start, end + 1);
                    } 
                }
            }
        }
    }
    
    helper(0, 1);
    
    return res;
};