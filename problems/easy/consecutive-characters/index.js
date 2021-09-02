/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let prevC = "";
  let power = 0;
  let globalPower = 0;

  for (let i = 0; i < s.length; i++) {
    const currentC = s[i];
    if (i === 0) {
      power = 1;
      globalPower = 1;
    } else {
      if (currentC === prevC) {
        power++;
      } else {
        power = 1;
      }
      globalPower = Math.max(power, globalPower);
    }
    prevC = currentC;
  }

  return globalPower;
};
