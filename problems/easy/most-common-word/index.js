/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const words = paragraph.split(" ");
  const arr = words.reduce((array, word) => {
    const patt = new RegExp(/["!?',;.]+/g);
    if (patt.test(word)) {
      const _word = word.replace(/["!?',;.]+/g, " ");
      array = array.concat(_word.split(" "));
    } else {
      array.push(word);
    }
    return array;
  }, []);

  const obj = arr.reduce((result, word) => {
    if (word.length) {
      let wordLowerCase = word.toLowerCase();
      if (!banned.includes(wordLowerCase)) {
        if (result[wordLowerCase]) {
          result[wordLowerCase] += 1;
        } else {
          result[wordLowerCase] = 1;
        }
      }
    }

    return result;
  }, {});

  let currMax = 0;
  const keys = Object.keys(obj);
  const commonWord = keys.reduce((word, key) => {
    const val = obj[key];
    if (val > currMax) {
      currMax = val;
      word = key;
    }

    return word;
  }, "");

  return commonWord;
};
