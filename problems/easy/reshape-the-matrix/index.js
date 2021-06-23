/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    const flattenArr = mat.flat();
    if (r * c > flattenArr.length || r * c < flattenArr.length) {
        return mat;
    } else {
        const arr = [];
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