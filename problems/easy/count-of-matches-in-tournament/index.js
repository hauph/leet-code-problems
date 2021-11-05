/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  if (n === 1) {
    return 0;
  }

  let totalMatches = 0;
  let totalTeams = n;

  while (totalTeams > 1) {
    if (n % 2 === 0) {
      totalMatches += totalTeams / 2;
      totalTeams = totalTeams / 2;
    } else {
      totalMatches += (totalTeams - 1) / 2;
      totalTeams = (totalTeams - 1) / 2 + 1;
    }
  }

  return totalMatches;
};
