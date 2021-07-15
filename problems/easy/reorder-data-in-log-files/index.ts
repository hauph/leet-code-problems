function reorderLogFilesTS(logs: string[]): string[] {
    const digitLogs: string[] = [];
    const letterLogs: string[] = logs.reduce((arr: string[], log: string, index: number): string[] => {
        const subArr = log.split(' ');
        if (Number(subArr[1]) % 1 !== 0) {
            arr.push(log);
        } else {
            digitLogs.push(log);
        }
        return arr;
    }, []);
    
    letterLogs.sort((a,b) => {
        const contentA: string = a.slice(a.indexOf(' '), a.length);
        const contentB: string = b.slice(b.indexOf(' '), b.length);
        let result = contentA.localeCompare(contentB);
        if (contentA === contentB) {
            result = a.localeCompare(b);
        }
        return result;
    });
    
    return [...letterLogs, ...digitLogs];
};