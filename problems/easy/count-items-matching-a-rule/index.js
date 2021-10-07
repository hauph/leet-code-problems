/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const res = items.reduce((result, item) => {
    let index = 0;
    switch (ruleKey) {
      case "name":
        index = 2;
        break;
      case "color":
        index = 1;
        break;
      default:
      // nothing here
    }

    if (item[index] === ruleValue) {
      result++;
    }

    return result;
  }, 0);

  return res;
};
