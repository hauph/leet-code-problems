function countGoodSubstringsTS(s: string): number {
    let count: number = 0;
    const helper = (start: number, end: number): void => {
        const subStr: string = s.slice(start, end);
        if (subStr.length === 3) {
            const arrStr: string[] = subStr.split('');
            const obj = {};
            let shouldCount = arrStr.slice().reduce((bool, str, index, arr) => {
                if (obj[str]) {
                    bool = false;
                    arr.splice(0, 1); 
                } else {
                    obj[str] = 1;
                }
                    
                return bool;
            }, true);
            
            if (shouldCount) {
                count++; 
            }
            
            helper(start + 1, end + 1);
        }
    }
    
    helper(0, 3);
    
    return count;
};