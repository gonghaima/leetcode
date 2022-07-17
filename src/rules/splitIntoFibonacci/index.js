/**
 * @param {string} num
 * @return {number[]}
 */

/*********************************************************************************************************************
 * Runtime: 102 ms, faster than 71.43% of JavaScript online submissions for Split Array into Fibonacci Sequence.     *
 * Memory Usage: 43.6 MB, less than 71.43% of JavaScript online submissions for Split Array into Fibonacci Sequence. *
 *********************************************************************************************************************/

// https://leetcode.com/problems/split-array-into-fibonacci-sequence/discuss/1104882/JavaScript-Clean-Recursive-Solution

// dfs

var splitIntoFibonacci = function(S) {
  const bit32 = 2 ** 31 - 1;

  for (let i = 1; i < S.length; i++) {
    const num1 = S.slice(0, i);
    if (+num1 > bit32) break;

    for (let j = i + 1; j < S.length; j++) {
      const num2 = S.slice(i, j);
      if (+num2 > bit32) break;

      const rest = S.slice(j);
      const result = isValid(num1, num2, rest, [num1, num2]);

      if (result) return result;
      if (S[i] === '0') break;
    }
    if (S[0] === '0') break;
  }

  function isValid(num1, num2, rest, output) {
    const sum = (+num1 + +num2).toString();
    if (+sum > bit32) return false;
    output.push(sum);
    if (rest === sum) return output;
    if (rest.startsWith(sum))
      return isValid(num2, sum, rest.slice(sum.length), output);
    return false;
  }
  return [];
};

export default splitIntoFibonacci;
