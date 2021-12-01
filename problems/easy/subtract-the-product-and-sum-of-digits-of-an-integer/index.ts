function subtractProductAndSumTS(n: number): number {
    const str: string = n.toString();
    let product = null;
    let sum: number = 0;
    str.split('').forEach(s => {
        const numb = +s;
        product = product === null ? numb : product * numb;
        sum += numb;
    });
    return product - sum;
};