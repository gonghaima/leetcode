/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSumII = function(numbers, target) {
  for (let start = 0, end = numbers.length - 1; start < end; ) {
    let sum = numbers[start] + numbers[end];
    if (sum === target) return [++start, ++end];
    else sum > target ? end-- : start++;
  }
};

export default twoSumII;
