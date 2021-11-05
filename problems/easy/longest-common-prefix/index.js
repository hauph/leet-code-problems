/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let res = "";
  const firstWord = strs[0];
  const helper = (start, end) => {
    if (end <= firstWord.length) {
      const temp = firstWord.substr(start, end);
      const patt = new RegExp(`^(${temp})`, "g");

      let isOkay = true;
      for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        if (str.match(patt) === null) {
          isOkay = false;
        }

        if (i === strs.length - 1) {
          if (isOkay) {
            res = temp.length > res.length ? temp : res;
            helper(start, end + 1);
          }
        }
      }
    }
  };

  helper(0, 1);

  return res;
};
