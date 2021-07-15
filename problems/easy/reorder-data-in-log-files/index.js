/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const digitLogs = [];
    const letterLogs = logs.reduce((arr, log, index) => {
        const subArr = log.split(' ');
        if (subArr[1] % 1 !== 0) {
            arr.push(log);
        } else {
            digitLogs.push(log);
        }
        return arr;
    }, []);
    
    letterLogs.sort((a,b) => {
        const contentA = a.slice(a.indexOf(' '), a.length);
        const contentB = b.slice(b.indexOf(' '), b.length);
        let result = contentA.localeCompare(contentB);
        if (contentA === contentB) {
            result = a.localeCompare(b);
        }
        return result;
    });
    
    return [...letterLogs, ...digitLogs];
};