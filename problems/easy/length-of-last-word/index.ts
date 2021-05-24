function lengthOfLastWordTS(s: string): number {
    const splitS: string[] = s.split(' ');
    const fiteredArr: string[] = splitS.filter(item => {
        if (item !== '') {
            return item
        }
    })
    if (fiteredArr.length === 0) {
        return 0;
    }
    return fiteredArr[fiteredArr.length - 1].length;
};