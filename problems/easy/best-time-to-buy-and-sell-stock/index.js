/**
 * @param {number[]} prices
 * @return {number}
*/
var maxProfit = function(prices) {
    let profit = 0;
    let currentMin = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        const p = prices[i];
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