/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  let match = s.match(/1+/g);

  return match.length === 1;
};
