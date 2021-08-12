function maxProfitTS(prices: number[]): number {
    let profit: number = 0;
    let currentMin: number = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        const p: number = prices[i];
        if (p < currentMin) {
            currentMin = p;
        } else {
            const pf = p - currentMin;
            if (pf > profit) {
                profit = pf;
            }
        }
    }
    
    return profit;
};