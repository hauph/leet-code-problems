/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  const str = n.toString();
  const obj = str.split("").reduce(
    (object, s) => {
      const numb = +s;
      const { product } = object;
      object.product = object.product === null ? numb : product * numb;
      object.sum += numb;
      return object;
    },
    {
      product: null,
      sum: null,
    }
  );
  return obj.product - obj.sum;
};
