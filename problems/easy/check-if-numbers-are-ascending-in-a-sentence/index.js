/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  const sArr = s.split(" ");
  let prevNumb = null;
  let result = true;

  for (let i = 0; i < sArr.length; i++) {
    const word = sArr[i];
    const numb = parseInt(word);

    if (numb / 1 >= 0) {
      if (prevNumb === null) {
        prevNumb = numb;
      } else {
        if (prevNumb < numb) {
          prevNumb = numb;
        } else {
          result = false;
          break;
        }
      }
    }
  }

  return result;
};
