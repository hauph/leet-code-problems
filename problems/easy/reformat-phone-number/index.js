/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
  let _number = number.replace(/(\s|-)/g, "");
  let res = "";

  while (_number.length > 0) {
    let subStr = "";
    if (_number.length > 4) {
      subStr = _number.substr(0, 3);
      res += `${subStr}-`;
    } else {
      switch (_number.length) {
        case 2:
        case 3:
          res += `${_number}-`;
          subStr = _number;
          break;
        default:
          subStr = _number.substr(0, 2);
          res += `${subStr}-`;
      }
    }
    _number = _number.replace(subStr, "");
  }

  res = res.replace(/-$/, "");
  return res;
};
