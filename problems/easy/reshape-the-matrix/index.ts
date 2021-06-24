function matrixReshapeTS(mat: number[][], r: number, c: number): number[][] {
    const flattenArr: number[] = mat.flat();
    if (r * c > flattenArr.length || r * c < flattenArr.length) {
        return mat;
    } else {
        const arr: number[][] = [];
        const helper = (index) => {
            if (arr.length < r) {
               const subArr = flattenArr.slice(index, c + index);
                arr.push(subArr);
                helper(index + c);
            }
        }
        helper(0);
        return arr;
    }
};