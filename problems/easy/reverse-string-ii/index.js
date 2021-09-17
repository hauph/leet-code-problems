/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const kX2 = 2 * k;
  let currentPos = 0;
  let string = "";

  const stringFactory = (str) => {
    const subString = str.substr(0, k);
    const reversedStr = subString.split("").reverse().join("");
    const patt = new RegExp(`^([a-z]){${k}}`);
    return str.replace(patt, reversedStr);
  };

  for (let i = 0; i < s.length; i++) {
    if (i > 0 && (i + 1) % kX2 === 0) {
      const subStr = s.substr(currentPos, kX2);
      string += stringFactory(subStr);
      currentPos = i + 1;
    }

    if (i === s.length - 1) {
      const str = s.substr(currentPos, kX2);
      if (str.length >= k && str.length < kX2) {
        string += stringFactory(str);
      } else if (str.length < k) {
        string += str.split("").reverse().join("");
      }
    }
  }

  return string;
};
