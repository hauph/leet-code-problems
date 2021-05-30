function transposeTS(matrix: number[][]): number[][] {
    const arr: number[][] = [];
    
    for (let i = 0; i < matrix[0].length; i++) { // subArr's length
        arr.push([]);
        for (let l = 0; l < matrix.length; l++) { // mainArr's length
            arr[i].push(matrix[l][i]);
        }
    }

    return arr;
};