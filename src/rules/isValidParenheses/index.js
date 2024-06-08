/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // Initialize stack to store the closing brackets expected...
  let stack = [];
  // Traverse each charater in input string...
  for (let idx = 0; idx < s.length; idx++) {
    // If open parentheses are present, push it to stack...
    if (s[idx] == '{') {
      stack.push('}');
    } else if (s[idx] == '[') {
      stack.push(']');
    } else if (s[idx] == '(') {
      stack.push(')');
    }
    // If a close bracket is found, check that it matches the last stored open bracket
    else if (stack.pop() !== s[idx]) {
      return false;
    }
  }
  return !stack.length;
};
export default isValid;
