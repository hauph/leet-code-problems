/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
 var sumEvenAfterQueries = function(A, queries) {
    const arr = [];
    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        for (let j = 0; j < A.length; j++) {
            if (i === j) {
                A[query[1]] = A[query[1]] + query[0];
                let evenTotal = 0;
                for (let k = 0; k < A.length; k++) {
                    if (A[k] % 2 === 0) {
                        evenTotal += A[k];
                    }
                }
                arr.push(evenTotal)
            }
        }
    }
    
    return arr;
};