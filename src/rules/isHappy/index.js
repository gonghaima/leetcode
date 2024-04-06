/**
 * @param {number} n
 * @return {boolean}
 */

const sumOfSquares = (numString) => {
  return numString
    .toString()
    .split('')
    .reduce(function(sum, num) {
      return sum + Math.pow(num, 2);
    }, 0);
};

var isHappy = function(n) {
  const seen = {};
  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    n = sumOfSquares(n);
  }
  return n === 1 ? true : false;
};

export default isHappy;
