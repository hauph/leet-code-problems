/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (i % 2 !== 0) {
      const number = parseInt(c);
      const prevCharCode = s[i - 1].charCodeAt();
      const cFromNewCharCode = String.fromCharCode(prevCharCode + number);
      res += cFromNewCharCode;
    } else {
      res += c;
    }
  }

  return res;
};
