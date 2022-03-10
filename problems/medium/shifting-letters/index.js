/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  const arr = [];
  let prevShift = 0;

  for (let i = shifts.length - 1; i >= 0; i--) {
    const shift = shifts[i];
    const newShift = shift + prevShift;
    const letter = s[i];
    const charCode = letter.charCodeAt() - 97;
    let newCharCode = charCode + (i === shifts.length - 1 ? shift : newShift);

    if (newCharCode > 25) {
      newCharCode = newCharCode % 26;
    }

    const newLetter = String.fromCharCode(newCharCode + 97);

    arr[i] = newLetter;

    prevShift = newShift;
  }

  return arr.join("");
};
