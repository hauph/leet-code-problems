function backspaceCompareTS(s: string, t: string): boolean {
    const arrS = s.split('').reduce((arr: string[], item: string, index: number): string[] => {
        if (item !== "#") {
            arr.push(item);
        } else if (item === '#' && arr.length) {
            arr.splice(arr.length - 1, 1);
        }
        return arr;
    }, []);
    const arrT = t.split('').reduce((arr: string[], item: string, index: number): string[] => {
        if (item !== "#") {
            arr.push(item);
        } else if (item === '#' && arr.length) {
            arr.splice(arr.length - 1, 1);
        }
        return arr;
    }, []);
    return arrS.join('') === arrT.join('');
};