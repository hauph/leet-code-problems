function gcdOfStringsTS(str1: string, str2: string): string {
    let res: string = '';
    const helper = (sourceStr: string, comparedStr: string, start: number, end: number): void => {
        if (end < sourceStr.length + 1) {
            const subStr: string = sourceStr.substr(start, end);
            const patt = new RegExp(`${subStr}`, 'g');
            const match: string[] = comparedStr.match(patt);
            const match2: string[] = sourceStr.match(patt);
            if (match !== null && match2 !== null) {
                const str: string = match.join('');
                const secondStr: string = match2.join('');
                if (str === comparedStr && secondStr === sourceStr) {
                    res = subStr.length > res.length ? subStr : res;
                } 
                helper(sourceStr, comparedStr, start, end + 1);
            } else {
                helper(sourceStr, comparedStr, start, end + 1);
            }
        }    
    }
    
    const sourceStr = str1.length > str2.length ? str2 : str1;
    const comparedStr = sourceStr === str1 ? str2 : str1;
    helper(sourceStr, comparedStr, 0, 1);
    
    return res;
};