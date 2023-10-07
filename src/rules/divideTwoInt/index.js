/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  var rem = Math.abs(dividend);
  var div = Math.abs(divisor);
  var quo = 0;
  // subtract divisor bit by bit, starting from most significant bit
  for (var b = 31; b >= 0; b--) {
    if (rem >>> b >= div) {
      quo |= 1 << b;
      rem -= div << b;
    }
  }
  quo >>>= 0; // make unsigned
  if (dividend > 0 !== divisor > 0) quo = -quo; // add sign
  return quo > -0x80000000
    ? quo < 0x7fffffff
      ? quo
      : 0x7fffffff
    : -0x80000000; // check bounds
};
export default divide;
