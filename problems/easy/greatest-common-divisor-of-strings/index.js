/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  let res = "";
  const helper = (sourceStr, comparedStr, start, end) => {
    if (end < sourceStr.length + 1) {
      const subStr = sourceStr.substr(start, end);
      const patt = new RegExp(`${subStr}`, "g");
      const match = comparedStr.match(patt);
      const match2 = sourceStr.match(patt);
      if (match !== null && match2 !== null) {
        const str = match.join("");
        const secondStr = match2.join("");
        if (str === comparedStr && secondStr === sourceStr) {
          res = subStr.length > res.length ? subStr : res;
        }
        helper(sourceStr, comparedStr, start, end + 1);
      } else {
        helper(sourceStr, comparedStr, start, end + 1);
      }
    }
  };

  const sourceStr = str1.length > str2.length ? str2 : str1;
  const comparedStr = sourceStr === str1 ? str2 : str1;
  helper(sourceStr, comparedStr, 0, 1);

  return res;
};
