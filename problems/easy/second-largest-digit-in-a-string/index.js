/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    const numb = +s[i];
    if (
      typeof numb === "number" &&
      (numb === 0 || numb / numb === 1) &&
      !arr.includes(numb)
    ) {
      arr.push(numb);
    }
  }

  arr.sort();

  return arr.length <= 1 ? -1 : arr[arr.length - 2];
};
