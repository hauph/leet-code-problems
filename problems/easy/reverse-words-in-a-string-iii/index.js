/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.split(" ");
  const result = arr.reduce((str, word, index) => {
    let string = "";
    for (let i = word.length - 1; i >= 0; i--) {
      string += word[i];
    }

    if (index < arr.length - 1) {
      str += `${string} `;
    } else {
      str += string;
    }

    return str;
  }, "");

  return result;
};
