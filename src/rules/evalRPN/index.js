/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (Number.isInteger(+token)) {
      stack.push(token);
    } else {
      const second = stack.pop();
      const first = stack.pop();
      const exp = `${first} ${token} ${second}`;
      const exp_res = Math.trunc(eval(exp));
      stack.push(exp_res);
    }
  }

  return stack[0];
};

export default evalRPN;
