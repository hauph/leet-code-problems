function isToeplitzMatrixTS(matrix: number[][]): boolean {
    let result = true;
    for (let h = 0; h < matrix.length; h++) {
        const row = matrix[h];
        if (matrix[h + 1]) {
            for (let i = 0; i < row.length; i++) {
                let counter = h + 1;
                const numb = row[i];
                let pos = i;
                while (counter < matrix.length) {
                    pos++;
                    const currRow = matrix[counter];
                    const currNumb = currRow[pos];
                    if (currNumb !== undefined && currNumb !== numb) {
                        result = false;
                        break;
                    }
                    counter++;
                }

                if (!result) break;
            }
        }

        if (!result) break;
    }

    return result;
};