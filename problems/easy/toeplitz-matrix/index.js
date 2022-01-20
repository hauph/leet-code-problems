/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  let result = true;

  function checker(h) {
    if (h < matrix.length) {
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

      if (result) checker(h + 1);
    }
  }

  checker(0);

  return result;
};
