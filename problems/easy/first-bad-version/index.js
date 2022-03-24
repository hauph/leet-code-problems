/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let firstBadVersion = null;

    const binarySearch = (start, end) => {
      if (start <= end) {
        const middle = Math.floor((start + end) / 2);

        if (isBadVersion(middle)) {
          if (
            firstBadVersion === null ||
            (firstBadVersion !== null && firstBadVersion > middle)
          ) {
            firstBadVersion = middle;
          }

          binarySearch(start, middle - 1);
        } else {
          binarySearch(middle + 1, end);
        }
      }
    };

    binarySearch(1, n);

    return firstBadVersion;
  };
};
