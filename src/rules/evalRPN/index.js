/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const x = tokens.pop();

  return operators[x]
    ? operators[x](evalRPN(tokens), evalRPN(tokens))
    : parseInt(x);
};

const operators = {
  '+': (a, b) => b + a,
  '-': (a, b) => b - a,
  '*': (a, b) => b * a,
  '/': (a, b) => parseInt(b / a),
};

export default evalRPN;
