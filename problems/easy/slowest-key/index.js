/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  const keyDurations = new Map();
  let prevReleaseTime = 0;
  let longestDuration = 0;

  for (let i = 0; i < releaseTimes.length; i++) {
    const releaseTime = releaseTimes[i];
    const duration = releaseTime - prevReleaseTime;
    if (keyDurations.get(duration)) {
      const value = keyDurations.get(duration);
      value.push(keysPressed[i]);
      keyDurations.set(duration, value);
    } else {
      keyDurations.set(duration, [keysPressed[i]]);
    }

    if (duration > longestDuration) longestDuration = duration;

    prevReleaseTime = releaseTime;
  }

  const keys = keyDurations.get(longestDuration);
  keys.sort();

  return keys[keys.length - 1];
};
