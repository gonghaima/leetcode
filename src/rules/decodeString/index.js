/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];

  for (let letter of s) {
    if (letter != ']') {
      stack.push(letter);
    } else {
      let substr = '';
      while (stack[stack.length - 1] != '[') substr = stack.pop() + substr;

      // remove closing open bracket
      stack.pop();

      let k = '';

      while (stack.length && /^\d+$/.test(stack[stack.length - 1]))
        k = stack.pop() + k;

      stack.push(substr.repeat(Number(k)));
    }
  }

  return stack.join('');
};

export default decodeString;
