/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const boxes = [];
  let max = 0;

  for (let i = lowLimit; i <= highLimit; i++) {
    let boxNumber = i;

    if (i >= 10) {
      boxNumber = 0;
      const convertIToString = i.toString();
      for (let j = 0; j < convertIToString.length; j++) {
        boxNumber += +convertIToString[j];
      }
    }

    if (!boxes[boxNumber]) {
      boxes[boxNumber] = 1;
    } else {
      boxes[boxNumber] += 1;
    }

    max = boxes[boxNumber] > max ? boxes[boxNumber] : max;
  }

  return max;
};
