/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count = 0;
    const arrStr = s.split('');
    arrStr.forEach((str, index) => {
        const obj = {};
        const subStr = s.substr(index, 3);
        if (subStr.length === 3) {
            const arrSubStr = subStr.split('');
        
            let shouldCount = arrSubStr.slice().reduce((bool, str, index, arr) => {
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
        }
    });
    
    return count;
};