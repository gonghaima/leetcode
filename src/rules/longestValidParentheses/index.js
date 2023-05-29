/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let longest = 0,
    leftCount = 0,
    rightCount = 0;

  //left to right pass
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') leftCount++;
    else rightCount++;

    if (leftCount === rightCount) {
      longest = Math.max(longest, leftCount + rightCount);
    } else if (leftCount < rightCount) {
      leftCount = 0;
      rightCount = 0;
    }
  }

  //right to left pass
  (leftCount = 0), (rightCount = 0);
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '(') leftCount++;
    else rightCount++;

    if (leftCount === rightCount) {
      longest = Math.max(longest, leftCount + rightCount);
    } else if (leftCount > rightCount) {
      leftCount = 0;
      rightCount = 0;
    }
  }
  return longest;
};
export default longestValidParentheses;
