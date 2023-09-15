/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];
  for (const char of s) {
    if (char !== ']') {
      stack.push(char);
      continue;
    }
    let cur = stack.pop();
    let str = '';
    while (cur !== '[') {
      str = cur + str;
      cur = stack.pop();
    }
    let num = '';
    cur = stack.pop();
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }
    stack.push(cur);
    stack.push(str.repeat(Number(num)));
  }
  return stack.join('');
};

export default decodeString;
