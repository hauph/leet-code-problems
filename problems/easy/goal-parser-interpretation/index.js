/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let result = "";

  const helper = (index) => {
    if (index < command.length) {
      const c = command[index];

      if (c === "G") {
        result += c;
        helper(index + 1);
      } else {
        const nextC = command[index + 1];

        if (nextC === ")") {
          result += "o";
          helper(index + 2);
        } else {
          result += "al";
          helper(index + 4);
        }
      }
    }
  };

  helper(0);

  return result;
};
