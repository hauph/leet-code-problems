function sumEvenAfterQueriesTS(nums: number[], queries: number[][]): number[] {
    const arr = [];
    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                nums[query[1]] = nums[query[1]] + query[0];
                let evenTotal = 0;
                for (let k = 0; k < nums.length; k++) {
                    if (nums[k] % 2 === 0) {
                        evenTotal += nums[k];
                    }
                }
                arr.push(evenTotal)
            }
        }
    }
    
    return arr;
};