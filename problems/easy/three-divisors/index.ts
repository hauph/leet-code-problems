function isThreeTS(n: number): boolean {
    let counter: number = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            counter++;
        }
    }
    
    return counter === 3;
};