function fibTS(n: number): number {
    const arr: number[] = [];
    
    for (let i = 0; i <= n; i++) {
        if (arr.length <= 1) {
            arr.push(i);
        } else {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
    }
    
    return arr[arr.length - 1];
};